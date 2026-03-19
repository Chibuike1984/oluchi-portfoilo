const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted font-body">
        © 2026 Okafor Oluchi Esther. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-xs text-muted hover:text-foreground transition-colors font-body">LinkedIn</a>
        <a href="mailto:oluchi.esther@example.com" className="text-xs text-muted hover:text-foreground transition-colors font-body">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
