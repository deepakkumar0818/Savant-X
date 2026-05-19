'use client';

import { AlertTriangle, CheckCircle2, Loader2, Zap } from 'lucide-react';

export type LogLevel = 'success' | 'warn' | 'info';

export type WorkflowStep = {
  level: LogLevel;
  message: string;
  detail?: string;
  shortLabel: string;
};

type StepStatus = 'pending' | 'active' | 'done' | 'warn';

function stepStatus(
  index: number,
  runProgress: number,
  isRunning: boolean,
  hasRun: boolean,
  level: LogLevel,
): StepStatus {
  if (hasRun) return level === 'warn' ? 'warn' : 'done';
  if (index < runProgress) return level === 'warn' ? 'warn' : 'done';
  if (index === runProgress && isRunning) return 'active';
  return 'pending';
}

function WorkflowConnector({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div className="relative mx-0.5 mt-4 h-0.5 min-w-[1.25rem] flex-1 self-start">
      <div className="absolute inset-0 rounded-full bg-slate-200" />
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-violet-500 motion-safe:transition-all motion-safe:duration-500 ${
          done || active ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {active && (
        <span className="animate-workflow-flow-dot absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_6px_rgba(99,102,241,0.9)]" />
      )}
    </div>
  );
}

function WorkflowNode({
  entry,
  index,
  status,
}: {
  entry: WorkflowStep;
  index: number;
  status: StepStatus;
}) {
  const isActive = status === 'active';
  const isDone = status === 'done' || status === 'warn';
  const isWarn = status === 'warn';

  return (
    <div
      className="flex min-w-0 flex-1 flex-col items-center animate-workflow-node-pop"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 motion-safe:transition-all motion-safe:duration-300 ${
          isActive
            ? 'border-indigo-500 bg-indigo-50 animate-workflow-pulse-ring'
            : isDone
              ? isWarn
                ? 'border-amber-400 bg-amber-50'
                : 'border-emerald-500 bg-emerald-50'
              : 'border-slate-200 bg-white'
        }`}
      >
        {isActive && <Loader2 className="h-4 w-4 animate-spin text-indigo-600" aria-hidden />}
        {isDone && !isActive && (
          <span className="animate-workflow-check-pop">
            {isWarn ? (
              <AlertTriangle className="h-4 w-4 text-amber-600" aria-hidden />
            ) : (
              <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden />
            )}
          </span>
        )}
        {!isActive && !isDone && (
          <span className="text-[10px] font-bold text-slate-400">{index + 1}</span>
        )}
      </div>
      <span
        className={`mt-1.5 max-w-[3.5rem] truncate text-center text-[8px] font-semibold leading-tight ${
          isActive ? 'text-indigo-700' : isDone ? (isWarn ? 'text-amber-700' : 'text-emerald-700') : 'text-slate-400'
        }`}
      >
        {entry.shortLabel}
      </span>
    </div>
  );
}

type WorkflowAnimationProps = {
  label: string;
  steps: WorkflowStep[];
  isRunning: boolean;
  hasRun: boolean;
  runProgress: number;
};

export default function WorkflowAnimation({
  label,
  steps,
  isRunning,
  hasRun,
  runProgress,
}: WorkflowAnimationProps) {
  if (!isRunning && !hasRun) return null;

  const totalSteps = steps.length;
  const activeIndex = isRunning ? Math.max(0, runProgress - 1) : hasRun ? totalSteps - 1 : -1;
  const activeEntry = activeIndex >= 0 ? steps[activeIndex] : null;

  return (
    <div
      className="border-t border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 px-3 py-3"
      aria-live="polite"
    >
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5 text-indigo-500" aria-hidden />
          <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">Live workflow</span>
        </div>
        {(isRunning || hasRun) && (
          <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[8px] font-bold text-indigo-700">
            {isRunning ? `${runProgress}/${totalSteps}` : 'Complete'}
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-0">
        {steps.map((entry, i) => (
          <div key={`${entry.shortLabel}-${i}`} className="contents">
            <WorkflowNode
              entry={entry}
              index={i}
              status={stepStatus(i, runProgress, isRunning, hasRun, entry.level)}
            />
            {i < steps.length - 1 && (
              <WorkflowConnector
                active={isRunning && i === runProgress - 1}
                done={hasRun ? true : i < runProgress - 1}
              />
            )}
          </div>
        ))}
      </div>

      {(isRunning || hasRun) && activeEntry && (
        <div className={`mt-3 rounded-lg border px-2.5 py-2 motion-safe:animate-fade-in-up ${
            activeEntry.level === 'warn'
              ? 'border-amber-200 bg-amber-50/90'
              : hasRun && !isRunning
                ? 'border-emerald-200 bg-emerald-50/90'
                : 'border-indigo-200 bg-indigo-50/90'
          }`}
        >
          <p className="text-[10px] font-semibold text-slate-800">{activeEntry.message}</p>
          {activeEntry.detail && <p className="mt-0.5 text-[9px] text-slate-600">{activeEntry.detail}</p>}
        </div>
      )}

      {hasRun && !isRunning && (
        <div className="mt-2 flex items-center justify-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 animate-workflow-check-pop text-emerald-600" aria-hidden />
          <span className="text-[9px] font-semibold text-emerald-700">{label} workflow complete</span>
        </div>
      )}
    </div>
  );
}
