'use client';

import { useState } from 'react';
import { RotateCcw, Send } from 'lucide-react';
import { Button } from './ui';

/** Sticky bar at the bottom of an editor: unpublished changes, Discard and Publish. */
export function PublishBar({
  count,
  publishing,
  onPublish,
  onDiscard,
  readonly,
}: {
  count: number;
  publishing: boolean;
  onPublish: (message?: string) => void;
  onDiscard: () => void;
  readonly?: boolean;
}) {
  const [message, setMessage] = useState('');
  if (!count) return null;
  return (
    <div className="sticky bottom-0 z-20 -mx-4 mt-8 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.18)] backdrop-blur sm:-mx-8 sm:px-8">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm font-medium text-slate-700">
          <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-amber-500 align-middle" aria-hidden />
          {count} unpublished {count === 1 ? 'change' : 'changes'}
        </p>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={120}
          placeholder="Describe the change (optional)"
          aria-label="Describe the change"
          className="h-9 min-w-0 flex-1 rounded-lg border-0 px-3 text-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500 sm:max-w-sm"
        />
        <div className="ml-auto flex gap-2">
          <Button variant="ghost" onClick={onDiscard} disabled={publishing}>
            <RotateCcw className="h-4 w-4" aria-hidden />
            Discard
          </Button>
          <Button
            variant="primary"
            loading={publishing}
            disabled={readonly}
            title={readonly ? 'Publishing is not set up on this server.' : undefined}
            onClick={() => {
              onPublish(message || undefined);
              setMessage('');
            }}
          >
            {!publishing && <Send className="h-4 w-4" aria-hidden />}
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}
