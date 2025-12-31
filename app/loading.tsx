export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black">
      <div className="w-[min(560px,92vw)]">
        <div className="mb-6 flex items-center justify-between text-sm text-zinc-400">
          <span className="tracking-wide">wait loading..</span>
          <span className="text-zinc-500">Hiyaok Coding</span>
        </div>

        <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-900">
          <div className="h-full w-[65%] animate-shimmer rounded-full bg-gradient-to-r from-zinc-700 via-zinc-300 to-zinc-700 bg-[length:200%_200%]" />
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-900 bg-zinc-950/70 p-6">
          <div className="text-xl font-semibold text-zinc-100">
            Siap bikin bot Telegram yang “niat” dan kepake
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Permudah kerjaan kamu dengan bot telegram
          </p>
        </div>
      </div>
    </div>
  );
}
