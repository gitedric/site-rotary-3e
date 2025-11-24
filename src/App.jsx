import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  Users, 
  FileText, 
  CheckCircle, 
  Briefcase, 
  Globe, 
  Menu, 
  X,
  Award,
  Info,
  Mail,
  ArrowRight
} from 'lucide-react';

// Couleurs officielles Rotary (approximations Hex)
const RotaryTheme = {
  royalBlue: "bg-[#00246c]", 
  gold: "bg-[#fece09]",
  goldHover: "hover:bg-[#e4b808]",
  textBlue: "text-[#00246c]",
  textGold: "text-[#c6a006]" // Légèrement plus foncé pour la lisibilité sur fond blanc
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Étudiants", href: "#students" },
    { name: "Professionnels", href: "#auditors" },
    { name: "Contact", href: "#infos" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <div className="flex items-center justify-center">
              {/* Utilisation d'une URL publique fiable pour le logo Rotary */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Rotary_International_Logo.svg" 
                alt="Logo Roue Rotary" 
                className="h-16 w-auto" 
              />
            </div>
            <div className="flex flex-col justify-center h-full">
              <span className={`font-black text-3xl tracking-tighter leading-none ${RotaryTheme.textBlue} uppercase`}>Rotary</span>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Thionville St-Exupéry</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 h-full items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-gray-600 hover:text-[#00246c] font-bold text-sm uppercase tracking-wider transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-[#fece09]`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://chk.me/04ZCihb" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${RotaryTheme.gold} text-[#00246c] font-black uppercase text-sm px-6 py-3 hover:bg-opacity-90 transition-all shadow-sm`}
            >
              S'inscrire
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#00246c] p-2 focus:outline-none">
              {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-bold text-gray-800 uppercase hover:bg-gray-50 hover:text-[#00246c]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div id="home" className="relative bg-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 transform skew-x-12 translate-x-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left Content */}
          <div className="lg:w-1/2 py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <span className={`font-bold tracking-widest uppercase mb-4 ${RotaryTheme.textGold} flex items-center gap-2`}>
              <span className="h-1 w-8 bg-[#fece09]"></span> Événement 2026
            </span>
            <h1 className={`text-5xl md:text-6xl font-black ${RotaryTheme.textBlue} leading-tight mb-6 uppercase`}>
              Agir pour <br/>votre avenir
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-light">
              L'Opération 3E : Un entraînement intensif à l'entretien d'embauche. Rencontrez des dirigeants, perfectionnez votre CV et gagnez en confiance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#students" className={`${RotaryTheme.royalBlue} text-white font-bold uppercase tracking-wide px-8 py-4 text-center hover:opacity-90 transition-all flex items-center justify-center gap-2`}>
                Espace Étudiant <ArrowRight size={20} />
              </a>
              <a href="#auditors" className="bg-white border-2 border-[#00246c] text-[#00246c] font-bold uppercase tracking-wide px-8 py-4 text-center hover:bg-blue-50 transition-all">
                Espace Auditeur
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
               <div className="flex flex-col">
                  <span className={`text-2xl font-black ${RotaryTheme.textBlue}`}>07 FÉV</span>
                  <span className="text-sm text-gray-500 uppercase font-bold">Samedi 2026</span>
               </div>
               <div className="flex flex-col">
                  <span className={`text-2xl font-black ${RotaryTheme.textBlue}`}>08h30</span>
                  <span className="text-sm text-gray-500 uppercase font-bold">À 12h30</span>
               </div>
               <div className="flex flex-col">
                  <span className={`text-2xl font-black ${RotaryTheme.textBlue}`}>IUT</span>
                  <span className="text-sm text-gray-500 uppercase font-bold">Thionville-Yutz</span>
               </div>
            </div>
          </div>

          {/* Right Image Placeholder (Abstract Modern Style) */}
          <div className="lg:w-1/2 bg-[#00246c] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-20">
                {/* Pattern géométrique simple */}
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
             </div>
             <div className="p-12 text-center text-white z-10">
                {/* Remplacement de l'icône Users par le logo 3E fourni */}
                <img 
                  src="/logo3E.png"
                  alt="Logo Opération 3E" 
                  className="mx-auto mb-6 h-32 w-auto opacity-80" 
                />
                <h3 className="text-3xl font-black uppercase tracking-widest border-b-4 border-[#fece09] inline-block pb-2">Opération 3E</h3>
                <p className="mt-4 text-blue-100 font-light">Entraînement - Entretien - Embauche</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentSection = () => {
  const workshops = [
    {
      title: "CV Percutant",
      desc: "Apprends à créer une vitrine professionnelle claire. Organisation, mots-clés et mise en forme pour capter l'attention.",
      icon: <FileText size={28} />
    },
    {
      title: "Simulations",
      desc: "2 entretiens réels avec des dirigeants. Feedback immédiat sur votre posture et vos réponses.",
      icon: <Users size={28} />
    },
    {
      title: "Look & Image",
      desc: "Comprendre les codes vestimentaires de votre secteur. L'importance cruciale de la première impression.",
      icon: <User size={28} />
    },
    {
      title: "Identité Numérique",
      desc: "E-réputation et réseaux sociaux : les utiliser comme leviers et éviter les pièges visibles par les recruteurs.",
      icon: <Globe size={28} />
    }
  ];

  return (
    <div id="students" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 border-l-8 border-[#fece09] pl-8">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Programme</h2>
          <h3 className={`text-4xl font-black uppercase ${RotaryTheme.textBlue}`}>
            Pour les Étudiants
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            Préparez-vous concrètement avec des ateliers thématiques et des mises en situation.
          </p>
        </div>

        {/* Workshop Grid - Modern Flat Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 bg-gray-50">
          {workshops.map((ws, idx) => (
            <div key={idx} className="group p-8 border-b border-r border-gray-200 hover:bg-white transition-colors duration-300">
              <div className={`w-14 h-14 ${RotaryTheme.royalBlue} text-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#fece09] group-hover:text-[#00246c] transition-colors`}>
                {ws.icon}
              </div>
              <h4 className={`text-xl font-bold ${RotaryTheme.textBlue} mb-3 uppercase`}>{ws.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {ws.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Checklist Section */}
        <div className="mt-20 flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <h4 className={`text-2xl font-black uppercase ${RotaryTheme.textBlue} mb-8 flex items-center`}>
              <Briefcase className="mr-3 text-[#fece09]" /> Checklist du Jour J
            </h4>
            <div className="bg-gray-50 p-8 border-l-4 border-[#00246c]">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-[#00246c] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">Fiche d'engagement remplie (obligatoire).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#00246c] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">CV imprimé en <strong>double exemplaire</strong>.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#00246c] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">Une offre d'emploi ciblée.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#00246c] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">Tenue professionnelle exigée.</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 font-bold uppercase mb-2">Besoin spécifique ?</p>
                <p className="text-gray-700 text-sm">
                  Pour un entretien en langue étrangère, contactez-nous : <br/>
                  <a href="mailto:Fxroyer46@gmail.com" className="text-[#00246c] font-bold underline">Fxroyer46@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-[#00246c] p-10 text-white flex flex-col items-center justify-center text-center">
            <h4 className="text-2xl font-black uppercase mb-4 text-[#fece09]">Inscription</h4>
            <p className="mb-8 text-blue-100">
              L'inscription est un engagement ferme. Scannez le QR code ou utilisez le lien ci-dessous.
            </p>
            <a 
              href="https://chk.me/04ZCihb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fece09] text-[#00246c] font-black uppercase py-4 px-10 hover:bg-white transition-colors w-full sm:w-auto inline-block"
            >
              S'inscrire Maintenant
            </a>
            <p className="mt-4 text-xs text-blue-300 opacity-60 uppercase tracking-widest">Via Check.me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuditorSection = () => {
  return (
    <div id="auditors" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-300 pb-8">
            <div>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Partenaires & Professionnels</h2>
                <h3 className={`text-4xl font-black uppercase ${RotaryTheme.textBlue}`}>
                    Instructions Auditeurs
                </h3>
            </div>
            <div className="mt-4 md:mt-0">
                <span className={`inline-block px-4 py-2 ${RotaryTheme.gold} text-[#00246c] font-bold uppercase text-xs tracking-wider`}>
                    Guide 2026
                </span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-sm border-t-4 border-[#00246c]">
                <div className="flex items-center gap-3 mb-6">
                    <Info className="text-[#00246c]" size={28} />
                    <h4 className="text-xl font-black uppercase text-gray-800">Logistique</h4>
                </div>
                <p className="text-gray-600 mb-4">
                    Présentez-vous à l'accueil de l'IUT. Des listes de passage vous seront remises.
                </p>
                <p className="text-gray-600">
                    Des étudiants et Rotariens vous guideront vers vos salles respectives.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 shadow-sm border-t-4 border-[#fece09]">
                <div className="flex items-center gap-3 mb-6">
                    <Clock className="text-[#c6a006]" size={28} />
                    <h4 className="text-xl font-black uppercase text-gray-800">Timing</h4>
                </div>
                <p className="text-gray-600 mb-4">
                    Suivez scrupuleusement la <strong>liste de passage</strong> pour assurer la fluidité.
                </p>
                <p className="text-gray-600">
                    En cas de trou ou d'absence, les ateliers sont ouverts. Si une salle est pleine, merci de patienter.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 shadow-sm border-t-4 border-[#00246c]">
                <div className="flex items-center gap-3 mb-6">
                    <Award className="text-[#00246c]" size={28} />
                    <h4 className="text-xl font-black uppercase text-gray-800">Mission</h4>
                </div>
                <ul className="space-y-3">
                    <li className="text-gray-600 text-sm border-b border-gray-100 pb-2">
                        <strong className="text-[#00246c] block uppercase text-xs mb-1">Action</strong>
                        Mener 2 simulations d'entretien par candidat.
                    </li>
                    <li className="text-gray-600 text-sm border-b border-gray-100 pb-2">
                        <strong className="text-[#00246c] block uppercase text-xs mb-1">Objectif</strong>
                        Retour constructif et bienveillant.
                    </li>
                    <li className="text-gray-600 text-sm">
                        <strong className="text-[#00246c] block uppercase text-xs mb-1">Impact</strong>
                        Donner confiance et faire progresser.
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="infos" className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black uppercase mb-6 tracking-wider">Rotary Thionville St-Exupéry</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Nous sommes des décideurs qui passons à l'action pour résoudre les problèmes les plus pressants dans notre communauté.
            </p>
            <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 bg-gray-700 flex items-center justify-center hover:bg-[#fece09] hover:text-[#00246c] transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 bg-gray-700 flex items-center justify-center hover:bg-[#fece09] hover:text-[#00246c] transition-colors cursor-pointer">LN</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-[#fece09] transition-colors uppercase text-sm font-bold">Accueil</a></li>
              <li><a href="#students" className="hover:text-[#fece09] transition-colors uppercase text-sm font-bold">Étudiants</a></li>
              <li><a href="#auditors" className="hover:text-[#fece09] transition-colors uppercase text-sm font-bold">Professionnels</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-4 text-gray-400 text-sm">
               <p className="flex items-center gap-3">
                 <Mail size={18} className="text-[#fece09]" /> Fxroyer46@gmail.com
               </p>
               <p className="flex items-center gap-3">
                 <span className="text-[#fece09] font-bold">TEL</span> 06 14 37 40 70
               </p>
               <p className="flex items-center gap-3">
                 <MapPin size={18} className="text-[#fece09]" /> IUT Thionville-Yutz
               </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; 2026 Rotary Club Thionville Saint-Exupéry.</p>
          <p>Servir pour changer des vies.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen selection:bg-[#fece09] selection:text-[#00246c]">
      <Navigation />
      <Hero />
      <StudentSection />
      <AuditorSection />
      <Footer />
    </div>
  );
}
