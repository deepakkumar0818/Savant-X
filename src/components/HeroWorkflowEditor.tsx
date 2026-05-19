'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircle2, Loader2, Play, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import WorkflowAnimation from '@/components/WorkflowAnimation';

type CodeLine = { line: number; content: string; type: string };

type ScenarioId = 'crm' | 'zoho' | 'erp' | 'iot';

type LogLevel = 'success' | 'warn' | 'info';

type ConsoleEntry = {
  level: LogLevel;
  message: string;
  detail?: string;
  shortLabel: string;
};

type ScenarioFile = {
  name: string;
  path: string;
  lines: CodeLine[];
};

type PreviewRow = { label: string; value: string; status?: 'ok' | 'pending' | 'warn' };

type ScenarioAccent = {
  tab: string;
  console: string;
  glow: string;
  badge: string;
};

type Scenario = {
  id: ScenarioId;
  label: string;
  logoSrc: string;
  logoAlt: string;
  accent: ScenarioAccent;
  workflowName: string;
  idleHint: string;
  files: ScenarioFile[];
  previewTitle: string;
  previewRows: PreviewRow[];
  runOutput: ConsoleEntry[];
  ctaHref: string;
  ctaLabel: string;
};

const LINE_COLORS: Record<string, string> = {
  comment: 'text-slate-500 italic',
  import: 'font-semibold text-sky-700',
  function: 'font-semibold text-violet-700',
  state: 'text-emerald-700',
  api: 'text-amber-700',
  error: 'text-red-600',
  return: 'font-semibold text-sky-700',
  jsx: 'text-slate-800',
  export: 'font-semibold text-blue-700',
  websocket: 'text-orange-600',
  effect: 'text-fuchsia-700',
  data: 'text-cyan-700',
  payment: 'text-lime-700',
  ui: 'text-pink-600',
  zoho: 'text-[#c8202f] font-medium',
  workflow: 'text-indigo-700',
  cursor: 'text-slate-500',
};

const SCENARIOS: Scenario[] = [
  {
    id: 'crm',
    label: 'CRM',
    logoSrc: '/images/zoho-crm.webp',
    logoAlt: 'Zoho CRM',
    accent: {
      tab: 'ring-blue-200 text-blue-700',
      console: 'from-blue-500/20 to-indigo-500/10',
      glow: 'shadow-blue-500/10',
      badge: 'bg-blue-500/15 text-blue-300 border-blue-400/30',
    },
    workflowName: 'Lead pipeline sync',
    idleHint: 'Fetch leads, assign follow-ups, refresh dashboard',
    previewTitle: 'Lead pipeline',
    previewRows: [
      { label: 'New leads today', value: '24', status: 'ok' },
      { label: 'Qualified', value: '11', status: 'ok' },
      { label: 'Follow-ups due', value: '6', status: 'pending' },
    ],
    runOutput: [
      { level: 'info', message: 'Connecting to /api/customers', detail: 'REST · GET', shortLabel: 'Fetch' },
      { level: 'success', message: 'Fetched 24 leads', detail: 'Pipeline updated', shortLabel: 'Leads' },
      { level: 'success', message: 'Assigned 6 follow-ups', detail: 'Inside sales queue', shortLabel: 'Assign' },
      { level: 'success', message: 'Dashboard refreshed', detail: '11 qualified · 6 due', shortLabel: 'Sync' },
    ],
    ctaHref: '/contact?service=crm',
    ctaLabel: 'Build your CRM',
    files: [
      {
        name: 'CustomerDashboard.tsx',
        path: 'src/crm/CustomerDashboard.tsx',
        lines: [
          { line: 1, content: '// SavantX CRM — lead pipeline', type: 'comment' },
          { line: 2, content: "import { useState, useEffect } from 'react'", type: 'import' },
          { line: 3, content: 'const CustomerDashboard = () => {', type: 'function' },
          { line: 4, content: '  const [leads, setLeads] = useState<Lead[]>([])', type: 'state' },
          { line: 5, content: '  const fetchLeads = async () => {', type: 'function' },
          { line: 6, content: '    const res = await fetch("/api/customers")', type: 'api' },
          { line: 7, content: '    setLeads(await res.json())', type: 'state' },
          { line: 8, content: '    assignFollowUps(leads.filter(l => l.due))', type: 'workflow' },
          { line: 9, content: '  }', type: 'function' },
          { line: 10, content: '  return <PipelineView leads={leads} />', type: 'jsx' },
          { line: 11, content: '}', type: 'function' },
          { line: 12, content: 'export default CustomerDashboard', type: 'export' },
        ],
      },
      {
        name: 'assignFollowUps.ts',
        path: 'src/crm/assignFollowUps.ts',
        lines: [
          { line: 1, content: '// Route overdue leads to owners', type: 'comment' },
          { line: 2, content: 'export function assignFollowUps(leads: Lead[]) {', type: 'function' },
          { line: 3, content: '  return leads.map(l => ({', type: 'data' },
          { line: 4, content: '    ...l, owner: l.territory ?? "inside-sales"', type: 'data' },
          { line: 5, content: '  }))', type: 'data' },
          { line: 6, content: '}', type: 'function' },
        ],
      },
    ],
  },
  {
    id: 'zoho',
    label: 'Zoho',
    logoSrc: '/images/ZohoCreator.png',
    logoAlt: 'Zoho Creator',
    accent: {
      tab: 'ring-[#c8202f]/30 text-[#b01828]',
      console: 'from-[#c8202f]/20 to-rose-500/10',
      glow: 'shadow-rose-500/10',
      badge: 'bg-rose-500/15 text-rose-200 border-rose-400/30',
    },
    workflowName: 'Zoho ecosystem sync',
    idleHint: 'CRM → Books → Creator · webhooks to ERP',
    previewTitle: 'Zoho ecosystem sync',
    previewRows: [
      { label: 'CRM → Books', value: 'Invoices synced', status: 'ok' },
      { label: 'Creator app', value: 'Work orders live', status: 'ok' },
      { label: 'Desk tickets', value: '3 escalated', status: 'warn' },
    ],
    runOutput: [
      { level: 'info', message: 'Zoho CRM: syncing deals', detail: '12 records', shortLabel: 'CRM' },
      { level: 'success', message: 'Zoho Books: invoices created', detail: '4 from won deals', shortLabel: 'Books' },
      { level: 'success', message: 'Creator: work order opened', detail: 'WO-1842 · production', shortLabel: 'Creator' },
      { level: 'success', message: 'Webhook delivered', detail: 'POST /api/zoho-form', shortLabel: 'Hook' },
    ],
    ctaHref: '/expertise/zoho-integrations',
    ctaLabel: 'Free Zoho strategy call',
    files: [
      {
        name: 'syncCrmToBooks.deluge',
        path: 'zoho/creator/syncCrmToBooks.deluge',
        lines: [
          { line: 1, content: '// Zoho CRM → Books automation', type: 'comment' },
          { line: 2, content: 'deal = zoho.crm.getRecordById("Deals", dealId);', type: 'zoho' },
          { line: 3, content: 'if(deal.get("Stage") == "Closed Won") {', type: 'workflow' },
          { line: 4, content: '  invoice = Map();', type: 'zoho' },
          { line: 5, content: '  invoice.put("Contact_Name", deal.get("Account_Name"));', type: 'zoho' },
          { line: 6, content: '  invoice.put("Line_Items", deal.get("Product_Details"));', type: 'zoho' },
          { line: 7, content: '  zoho.books.createRecord("Invoices", invoice);', type: 'zoho' },
          { line: 8, content: '  zoho.creator.createRecord("Work_Orders", woMap);', type: 'zoho' },
          { line: 9, content: '}', type: 'workflow' },
        ],
      },
      {
        name: 'zohoWebhook.ts',
        path: 'src/integrations/zohoWebhook.ts',
        lines: [
          { line: 1, content: '// Next.js handler for Zoho webhooks', type: 'comment' },
          { line: 2, content: 'export async function POST(req: Request) {', type: 'function' },
          { line: 3, content: '  const payload = await req.json()', type: 'api' },
          { line: 4, content: '  await syncToErp(payload.module, payload.record)', type: 'workflow' },
          { line: 5, content: '  return Response.json({ ok: true })', type: 'return' },
          { line: 6, content: '}', type: 'function' },
        ],
      },
    ],
  },
  {
    id: 'erp',
    label: 'ERP',
    logoSrc: '/images/ZohoInventary.png',
    logoAlt: 'Zoho Inventory',
    accent: {
      tab: 'ring-violet-200 text-violet-700',
      console: 'from-violet-500/20 to-purple-500/10',
      glow: 'shadow-violet-500/10',
      badge: 'bg-violet-500/15 text-violet-200 border-violet-400/30',
    },
    workflowName: 'Manufacturing release',
    idleHint: 'Release WO, reserve BOM, dispatch to shop floor',
    previewTitle: 'Manufacturing floor',
    previewRows: [
      { label: 'Work orders open', value: '18', status: 'ok' },
      { label: 'BOMs reserved', value: '42 lines', status: 'ok' },
      { label: 'Shop delay', value: '1 cell', status: 'warn' },
    ],
    runOutput: [
      { level: 'info', message: 'Loading work order WO-1842', detail: 'ERP · manufacturing', shortLabel: 'Load' },
      { level: 'success', message: 'Released to shop floor', detail: 'Cell dispatch queued', shortLabel: 'Release' },
      { level: 'success', message: 'BOM items reserved', detail: '42 inventory lines', shortLabel: 'BOM' },
      { level: 'warn', message: 'Cell B2 delay detected', detail: 'Est. +45 min · alert sent', shortLabel: 'Alert' },
    ],
    ctaHref: '/contact?service=erp',
    ctaLabel: 'Plan your ERP rollout',
    files: [
      {
        name: 'releaseWorkOrder.ts',
        path: 'src/erp/releaseWorkOrder.ts',
        lines: [
          { line: 1, content: '// Manufacturing — release & reserve BOM', type: 'comment' },
          { line: 2, content: 'export async function releaseWorkOrder(id: string) {', type: 'function' },
          { line: 3, content: '  const wo = await db.workOrders.find(id)', type: 'api' },
          { line: 4, content: '  await inventory.reserveBom(wo.bomId)', type: 'workflow' },
          { line: 5, content: '  await shopFloor.dispatch(wo.cell, wo.ops)', type: 'workflow' },
          { line: 6, content: '  return { status: "released", woId: id }', type: 'return' },
          { line: 7, content: '}', type: 'function' },
        ],
      },
    ],
  },
  {
    id: 'iot',
    label: 'IoT',
    logoSrc: '/images/icons/esp32_1.jpeg',
    logoAlt: 'ESP32 IoT',
    accent: {
      tab: 'ring-cyan-200 text-cyan-700',
      console: 'from-cyan-500/20 to-teal-500/10',
      glow: 'shadow-cyan-500/10',
      badge: 'bg-cyan-500/15 text-cyan-200 border-cyan-400/30',
    },
    workflowName: 'Device telemetry stream',
    idleHint: 'WebSocket feed, threshold rules, alert routing',
    previewTitle: 'Device telemetry',
    previewRows: [
      { label: 'Devices online', value: '156', status: 'ok' },
      { label: 'Avg temp', value: '23.4°C', status: 'ok' },
      { label: 'Alerts', value: '2', status: 'warn' },
    ],
    runOutput: [
      { level: 'info', message: 'WebSocket connected', detail: 'wss://api/devices', shortLabel: 'Connect' },
      { level: 'success', message: '156 devices online', detail: 'Live telemetry', shortLabel: 'Devices' },
      { level: 'success', message: 'Threshold rules evaluated', detail: 'All zones OK', shortLabel: 'Rules' },
      { level: 'warn', message: '2 devices over temp limit', detail: 'Alert routed to ops', shortLabel: 'Alert' },
    ],
    ctaHref: '/contact?service=iot',
    ctaLabel: 'Discuss IoT build',
    files: [
      {
        name: 'TelemetryDashboard.tsx',
        path: 'src/iot/TelemetryDashboard.tsx',
        lines: [
          { line: 1, content: '// Real-time IoT dashboard', type: 'comment' },
          { line: 2, content: "import { useEffect, useState } from 'react'", type: 'import' },
          { line: 3, content: 'const TelemetryDashboard = () => {', type: 'function' },
          { line: 4, content: "  const ws = new WebSocket('wss://api/devices')", type: 'websocket' },
          { line: 5, content: '  ws.onmessage = (e) => setDevices(JSON.parse(e.data))', type: 'websocket' },
          { line: 6, content: '  evaluateAlerts(devices)', type: 'workflow' },
          { line: 7, content: '  return <DeviceGrid devices={devices} />', type: 'jsx' },
          { line: 8, content: '}', type: 'function' },
        ],
      },
    ],
  },
];

const SCENARIO_ORDER: ScenarioId[] = ['crm', 'zoho', 'erp', 'iot'];
const WORKFLOW_STEP_MS = 420;
const CODE_SCROLL_MS = 2400;
const HOLD_AFTER_RUN_MS = 2000;
const TAB_SWITCH_MS = 500;

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function smoothScrollElement(el: HTMLElement, durationMs: number) {
  return new Promise<void>((resolve) => {
    const max = Math.max(0, el.scrollHeight - el.clientHeight);
    if (max <= 0) {
      resolve();
      return;
    }
    el.scrollTop = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      el.scrollTop = max * eased;
      if (t < 1) requestAnimationFrame(tick);
      else resolve();
    };
    requestAnimationFrame(tick);
  });
}

function statusDot(status?: PreviewRow['status']) {
  if (status === 'ok') return 'bg-emerald-500';
  if (status === 'warn') return 'bg-amber-500';
  return 'bg-slate-400';
}

function ScenarioTabLogo({ src, alt, active }: { src: string; alt: string; active: boolean }) {
  return (
    <span
      className={`relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ${
        active ? 'ring-slate-200 shadow-sm' : 'ring-slate-100'
      }`}
    >
      <Image src={src} alt={alt} width={20} height={20} className="h-full w-full object-contain p-0.5" />
    </span>
  );
}

function CodeLineView({ line }: { line: CodeLine }) {
  return (
    <div className="flex items-start gap-2">
      <span className="w-7 shrink-0 select-none text-right text-slate-400">{line.line}</span>
      <span className={LINE_COLORS[line.type] ?? 'text-slate-800'}>{line.content}</span>
    </div>
  );
}


export default function HeroWorkflowEditor() {
  const [scenarioId, setScenarioId] = useState<ScenarioId>('crm');
  const [fileIndex, setFileIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [runProgress, setRunProgress] = useState(0);
  const [previewPulse, setPreviewPulse] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const runIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const codeScrollRef = useRef<HTMLDivElement>(null);
  const resumeAutoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0];
  const activeFile = scenario.files[fileIndex] ?? scenario.files[0];

  const stopRun = useCallback(() => {
    if (runIntervalRef.current) {
      clearInterval(runIntervalRef.current);
      runIntervalRef.current = null;
    }
    setIsRunning(false);
    setRunProgress(0);
  }, []);

  useEffect(() => () => stopRun(), [stopRun]);

  const pauseAutoTemporarily = useCallback((ms = 12000) => {
    setAutoPlay(false);
    if (resumeAutoRef.current) clearTimeout(resumeAutoRef.current);
    resumeAutoRef.current = setTimeout(() => setAutoPlay(true), ms);
  }, []);

  useEffect(
    () => () => {
      if (resumeAutoRef.current) clearTimeout(resumeAutoRef.current);
    },
    [],
  );

  const applyScenario = useCallback(
    (id: ScenarioId) => {
      stopRun();
      setScenarioId(id);
      setFileIndex(0);
      setHasRun(false);
      setPreviewPulse(false);
    },
    [stopRun],
  );

  const runWorkflow = useCallback(
    (output: ConsoleEntry[]) =>
      new Promise<void>((resolve) => {
        stopRun();
        setIsRunning(true);
        setHasRun(false);
        setPreviewPulse(false);
        setRunProgress(0);

        let step = 0;
        runIntervalRef.current = setInterval(() => {
          if (step < output.length) {
            setRunProgress(step + 1);
            step += 1;
          } else {
            if (runIntervalRef.current) clearInterval(runIntervalRef.current);
            runIntervalRef.current = null;
            setIsRunning(false);
            setHasRun(true);
            setPreviewPulse(true);
            resolve();
          }
        }, WORKFLOW_STEP_MS);
      }),
    [stopRun],
  );

  const selectScenario = useCallback(
    (id: ScenarioId) => {
      pauseAutoTemporarily();
      applyScenario(id);
    },
    [applyScenario, pauseAutoTemporarily],
  );

  const handleRun = useCallback(() => {
    if (isRunning) return;
    pauseAutoTemporarily();
    void runWorkflow([...scenario.runOutput]);
  }, [isRunning, pauseAutoTemporarily, runWorkflow, scenario.runOutput]);

  useEffect(() => {
    if (!autoPlay) return;

    let cancelled = false;

    const runDemo = async () => {
      await sleep(900);

      while (!cancelled) {
        for (const id of SCENARIO_ORDER) {
          if (cancelled) return;

          const current = SCENARIOS.find((s) => s.id === id);
          if (!current) continue;

          applyScenario(id);
          await sleep(TAB_SWITCH_MS);

          for (let fi = 0; fi < current.files.length; fi++) {
            if (cancelled) return;
            setFileIndex(fi);
            await sleep(180);
            const el = codeScrollRef.current;
            if (el) await smoothScrollElement(el, CODE_SCROLL_MS);
          }

          if (cancelled) return;
          await runWorkflow([...current.runOutput]);
          if (cancelled) return;
          await sleep(HOLD_AFTER_RUN_MS);
        }
      }
    };

    void runDemo();

    return () => {
      cancelled = true;
      stopRun();
    };
  }, [autoPlay, applyScenario, runWorkflow, stopRun]);

  return (
    <div className="flex justify-center motion-safe:animate-fade-in-right motion-safe:[animation-delay:320ms] lg:justify-end lg:pt-10">
      <div className="relative w-full max-w-lg motion-safe:animate-hero-card-float-soft">
        <div
          className={`pointer-events-none absolute -inset-px rounded-[1.2rem] opacity-75 blur-xl motion-reduce:hidden ${scenario.accent.glow}`}
          style={{
            background:
              'linear-gradient(120deg, rgba(59,130,246,0.35), rgba(99,102,241,0.25), rgba(147,51,234,0.22))',
          }}
        />

        <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_28px_80px_-32px_rgba(30,64,175,0.45)] ring-1 ring-slate-200/70">
          <div className="flex items-center gap-3 border-b border-slate-200/90 bg-gradient-to-r from-slate-50 via-white to-slate-50/90 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/90 shadow-sm" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90 shadow-sm" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/95 shadow-sm" />
            </div>
            <div className="flex flex-1 items-center justify-center">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                savantx-workbench
              </span>
            </div>
            <span
              className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                hasRun
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : isRunning
                    ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                    : autoPlay
                      ? 'border-violet-200 bg-violet-50 text-violet-700'
                      : 'border-slate-200/80 bg-white text-slate-600'
              }`}
            >
              {isRunning ? 'Running' : hasRun ? 'Synced' : autoPlay ? 'Auto' : 'Ready'}
            </span>
          </div>

          <div className="flex gap-1 border-b border-slate-200/90 bg-slate-50/90 p-1.5">
            {SCENARIOS.map(({ id, label, logoSrc, logoAlt, accent }) => (
              <button
                key={id}
                type="button"
                onClick={() => selectScenario(id)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-[11px] font-semibold motion-safe:transition-all ${
                  scenarioId === id
                    ? `bg-white shadow-sm ring-1 ${accent.tab}`
                    : 'text-slate-600 hover:bg-white/70 hover:text-slate-800'
                }`}
              >
                <ScenarioTabLogo src={logoSrc} alt={logoAlt} active={scenarioId === id} />
                {label}
              </button>
            ))}
          </div>

          <div className="flex gap-0.5 overflow-x-auto border-b border-slate-200/90 bg-slate-100/60 px-2 pt-1.5">
            {scenario.files.map((file, idx) => (
              <button
                key={file.name}
                type="button"
                onClick={() => {
                  pauseAutoTemporarily();
                  setFileIndex(idx);
                }}
                className={`shrink-0 rounded-t-md border border-b-0 px-2.5 py-1.5 font-mono text-[10px] motion-safe:transition-colors ${
                  fileIndex === idx
                    ? 'border-slate-200/90 bg-white font-semibold text-slate-800'
                    : 'border-transparent bg-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {file.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="flex min-w-0 flex-1 flex-col border-slate-200/90 sm:border-r">
              <div
                className="border-b border-slate-200/90 bg-slate-50/80 px-3 py-2 font-mono text-[10px] text-slate-500"
                title={activeFile.path}
              >
                <span className="text-sky-600">{activeFile.path.split('/').slice(0, -1).join('/')}/</span>
                <span className="font-semibold text-slate-800">{activeFile.path.split('/').pop()}</span>
              </div>
              <div
                ref={codeScrollRef}
                className="max-h-[9.5rem] overflow-y-auto scroll-smooth bg-gradient-to-b from-slate-50 via-white to-slate-100/95 px-3 py-2.5 font-mono text-[10px] leading-relaxed md:text-[11px]"
                aria-label="Code sample"
              >
                <div className="space-y-1">
                  {activeFile.lines.map((line) => (
                    <CodeLineView key={line.line} line={line} />
                  ))}
                </div>
              </div>

              {(isRunning || hasRun) && (
                <WorkflowAnimation
                  label={scenario.label}
                  steps={scenario.runOutput}
                  isRunning={isRunning}
                  hasRun={hasRun}
                  runProgress={runProgress}
                />
              )}
            </div>

            <div
              className={`w-full shrink-0 bg-white p-3 sm:w-[11.5rem] motion-safe:transition-all motion-safe:duration-500 ${
                previewPulse ? 'ring-2 ring-inset ring-indigo-200/80' : ''
              }`}
            >
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                {scenario.previewTitle}
              </p>
              <ul className="space-y-2">
                {scenario.previewRows.map((row, i) => (
                  <li
                    key={row.label}
                    className={`rounded-lg border border-slate-100 bg-slate-50/80 px-2.5 py-2 motion-safe:transition-all motion-safe:duration-300 ${
                      hasRun ? 'motion-safe:translate-y-0 opacity-100' : ''
                    }`}
                    style={hasRun ? { transitionDelay: `${i * 80}ms` } : undefined}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot(row.status)} ${
                          hasRun ? 'motion-safe:animate-pulse' : ''
                        }`}
                      />
                      <span className="text-[10px] text-slate-500">{row.label}</span>
                    </div>
                    <p
                      className={`mt-0.5 text-xs font-semibold tabular-nums motion-safe:transition-colors ${
                        hasRun ? 'text-slate-900' : 'text-slate-400'
                      }`}
                    >
                      {hasRun ? row.value : '—'}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 border-t border-slate-200/90 bg-slate-50/90 px-3 py-2.5">
            <button
              type="button"
              onClick={handleRun}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 motion-safe:transition-all hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60 motion-safe:active:scale-[0.98]"
            >
              <Play className={`h-3.5 w-3.5 ${isRunning ? 'animate-pulse' : ''}`} aria-hidden />
              {isRunning ? 'Running…' : 'Run workflow'}
            </button>
            <Link
              href={scenario.ctaHref}
              className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              {scenario.ctaLabel} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
