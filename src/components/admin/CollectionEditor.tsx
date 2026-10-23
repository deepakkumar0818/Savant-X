'use client';

import { useState, type ReactNode } from 'react';
import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { Badge, Button } from './ui';

/** Two-pane editor for an ordered list: items on the left, the selected item's form on the right. */
export function CollectionEditor<T>({
  items,
  onChange,
  itemKey,
  itemTitle,
  itemMeta,
  isEdited,
  create,
  addLabel,
  renderForm,
  canDelete = () => true,
}: {
  items: T[];
  onChange: (items: T[]) => void;
  itemKey: (item: T) => string | number;
  itemTitle: (item: T) => string;
  itemMeta?: (item: T) => ReactNode;
  isEdited?: (item: T) => boolean;
  create: (items: T[]) => T;
  addLabel: string;
  renderForm: (item: T, update: (item: T) => void) => ReactNode;
  canDelete?: (item: T, items: T[]) => true | string;
}) {
  const [selected, setSelected] = useState(0);
  const index = Math.min(selected, items.length - 1);
  const current = items[index];

  const move = (i: number, d: number) => {
    const next = [...items];
    [next[i], next[i + d]] = [next[i + d], next[i]];
    onChange(next);
    setSelected(i + d);
  };
  const remove = (i: number) => {
    const allowed = canDelete(items[i], items);
    if (allowed !== true) return window.alert(allowed);
    if (!window.confirm(`Delete "${itemTitle(items[i]) || 'this item'}"? You can undo this with Discard until you publish.`)) return;
    onChange(items.filter((_, j) => j !== i));
    setSelected(Math.max(0, i - 1));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <ol className="max-h-[70vh] divide-y divide-slate-100 overflow-y-auto rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
          {items.map((item, i) => (
            <li key={itemKey(item)} className={`group flex items-center gap-1 pr-1 ${i === index ? 'bg-indigo-50' : 'hover:bg-slate-50'}`}>
              <button type="button" onClick={() => setSelected(i)} aria-current={i === index ? 'true' : undefined} className="min-w-0 flex-1 px-3 py-2.5 text-left">
                <span className={`block truncate text-sm font-medium ${i === index ? 'text-indigo-900' : 'text-slate-800'}`}>
                  {itemTitle(item) || <span className="italic text-slate-400">Untitled</span>}
                </span>
                <span className="mt-0.5 flex flex-wrap gap-1">
                  {itemMeta?.(item)}
                  {isEdited?.(item) && <Badge tone="indigo">edited</Badge>}
                </span>
              </button>
              <span className="flex shrink-0 flex-col">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move up" className="rounded p-0.5 text-slate-400 hover:text-slate-700 disabled:opacity-20">
                  <ArrowUp className="h-3.5 w-3.5" aria-hidden />
                </button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1} aria-label="Move down" className="rounded p-0.5 text-slate-400 hover:text-slate-700 disabled:opacity-20">
                  <ArrowDown className="h-3.5 w-3.5" aria-hidden />
                </button>
              </span>
            </li>
          ))}
        </ol>
        <Button
          className="mt-3 w-full"
          onClick={() => {
            onChange([...items, create(items)]);
            setSelected(items.length);
          }}
        >
          <Plus className="h-4 w-4" aria-hidden />
          {addLabel}
        </Button>
      </div>

      {current ? (
        <div className="min-w-0 rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-3.5">
            <h2 className="truncate text-[15px] font-semibold text-slate-900">{itemTitle(current) || 'Untitled'}</h2>
            <Button size="sm" variant="danger" onClick={() => remove(index)}>
              <Trash2 className="h-3.5 w-3.5" aria-hidden />
              Delete
            </Button>
          </div>
          <div className="space-y-5 p-5">{renderForm(current, (next) => onChange(items.map((x, j) => (j === index ? next : x))))}</div>
        </div>
      ) : (
        <p className="text-sm text-slate-500">Nothing here yet.</p>
      )}
    </div>
  );
}
