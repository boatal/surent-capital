export function SelectivitySection() {
  return (
    <section
      id="selectivity"
      className="relative w-screen overflow-hidden border-t border-white/10 bg-[var(--bg)]"
    >
      <div className="w-full px-6 md:px-10 lg:px-16 2xl:px-24">
        <div className="min-h-[clamp(420px,58vh,640px)] pt-[clamp(64px,8vh,120px)] pb-[clamp(64px,8vh,120px)] lg:min-h-[clamp(520px,62vh,760px)]">
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#AB8A72] opacity-90">
            SELECTIVITY
          </div>

          <div className="relative mt-[clamp(36px,6vh,64px)] flex items-center justify-center">
            <div className="relative w-full max-w-[980px] text-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 -top-8 select-none font-heading text-[clamp(96px,12vw,180px)] leading-none text-white opacity-[0.09]"
              >
                “
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -bottom-10 select-none font-heading text-[clamp(96px,12vw,180px)] leading-none text-white opacity-[0.09]"
              >
                ”
              </div>

              <h2 className="font-heading text-[clamp(34px,8.5vw,54px)] leading-[1.1] text-white/90 lg:text-[clamp(40px,5.2vw,72px)]">
                Where others see limits, we see opportunity.
              </h2>

              <div className="mt-[22px] text-[12px] uppercase tracking-[0.26em] text-white/70">
                Surent Capital
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
