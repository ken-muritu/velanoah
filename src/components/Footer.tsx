import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-foreground rounded-md flex items-center justify-center">
                <span className="text-background font-bold text-xs">V</span>
              </div>
              <span className="text-foreground font-semibold tracking-tight">VELA</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Catch every thought. Push every action. AI-powered productivity for East Africa and beyond.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#solana" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Solana Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Download APK
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.muritu.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Kennedy Muritu
                </a>
              </li>
              <li>
                <a
                  href="https://jenelica.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Design by Jenele
                </a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Privacy &amp; KDPA Compliant</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/velaos_ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  X / @velaos_ke
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@vela_os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  YouTube / @vela_os
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/velaos.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Instagram / @velaos.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} VELA. Built by Kennedy Muritu. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built on Solana. Powered by Claude AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
