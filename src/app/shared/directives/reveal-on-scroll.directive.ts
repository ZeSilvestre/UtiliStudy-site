import { Directive, ElementRef, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'reveal');

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.elementRef.nativeElement, 'revealed');
            this.observer?.unobserve(this.elementRef.nativeElement);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
