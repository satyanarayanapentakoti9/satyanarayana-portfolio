import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation = ({
  activeSection,
  onSectionClick
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "answers",
    label: "Profile"
  }, {
    id: "about",
    label: "Architecture"
  }, {
    id: "skills",
    label: "Depth"
  }, {
    id: "projects",
    label: "Case Studies"
  }, {
    id: "resume",
    label: "Experience"
  }, {
    id: "contact",
    label: "Contact"
  }];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-card" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Button variant="ghost" onClick={() => handleSectionClick("home")} className="text-lg font-bold tracking-normal font-inter" aria-label="Go to home section">SP</Button>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {menuItems.map(item => <Button key={item.id} variant="ghost" size="sm" onClick={() => handleSectionClick(item.id)} className={cn("font-medium transition-colors duration-200", activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground")}>
                  {item.label}
                </Button>)}
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="ml-4" aria-label="Toggle color theme">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle color theme">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-border">
              {menuItems.map(item => <Button key={item.id} variant="ghost" size="sm" onClick={() => handleSectionClick(item.id)} className={cn("w-full justify-start font-medium", activeSection === item.id ? "text-primary bg-primary/5" : "text-muted-foreground")}>
                  {item.label}
                </Button>)}
            </div>
          </div>}
      </div>
    </nav>;
};

export default Navigation;
