import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8 m-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">E</span>
              </div>
              <span className="font-semibold">ENS Chat</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Decentralized messaging for the future of communication.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ENS Integration</li>
              <li>Decentralized</li>
              <li>Censorship Resistant</li>
              <li>End-to-End Encrypted</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Documentation</li>
              <li>ENS Registry</li>
              <li>Smart Contracts</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Discord</li>
              <li>Twitter</li>
              <li>Telegram</li>
              <li>Forum</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 ENS Chat. Built on Ethereum.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
