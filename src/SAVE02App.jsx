import React, { useState, useEffect } from 'react';
import { 
  Calendar, MapPin, Clock, User, Users, FileText, CheckCircle, 
  Briefcase, Globe, Menu, X, Award, Info, Mail, ArrowRight, 
  Download, ChevronLeft, BookOpen, Target
} from 'lucide-react';

// --- CONFIGURATION & THEME ---
const RotaryTheme = {
  royalBlue: "bg-[#00246c]", 
  gold: "bg-[#fece09]",
  goldHover: "hover:bg-[#e4b808]",
  textBlue: "text-[#00246c]",
  textGold: "text-[#c6a006]"
};

// --- COMPOSANT : GUIDE INTERVENANT ---
const AuditorGuide = ({ onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 animate-in fade-in duration-500">
      {/* Header du Guide */}
      <div className={`${RotaryTheme.royalBlue} text-white sticky top-0 z-50 shadow-md`}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 hover:text-[#fece09] transition-colors font-bold uppercase text-sm"
          >
            <ChevronLeft size={20} /> Retour au site
          </button>
          <span className="font-black uppercase tracking-wider hidden sm:block">Guide Auditeur 2026</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        {/* Titre et Téléchargement */}
        <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-[#fece09] mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className={`text-3xl font-black uppercase ${RotaryTheme.textBlue} mb-2`}>Guide d'entretien</h1>
              <p className="text-gray-600 text-lg">Pour les auditeurs - Édition 2026</p>
            </div>
            
            <a 
              href="Guide_intervenant.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${RotaryTheme.gold} text-[#00246c] font-bold uppercase px-6 py-3 rounded-sm shadow hover:opacity-90 transition-all`}
            >
              <Download size={20} /> Télécharger le PDF
            </a>
          </div>
          
          <div className="mt-8 prose text-gray-600 leading-relaxed bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="flex items-center gap-2 font-bold text-[#00246c] uppercase mb-2">
              <Info size={20} /> Introduction
            </h3>
            <p className="mb-4">
              Ce guide est un outil d'accompagnement destiné aux auditeurs. Il sert de support pratique pour instaurer un échange bienveillant et constructif avec des jeunes ayant peu ou pas d'expérience professionnelle.
            </p>
            <p>
              <strong>Votre rôle :</strong> Faire comprendre qu'un entretien n'est pas une épreuve, mais une occasion d'échange. C'est une chance pour le candidat de mieux se connaître et de renforcer sa confiance en soi.
            </p>
          </div>
        </div>

        {/* Objectifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
           <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#00246c]">
              <h3 className="font-black uppercase text-[#00246c] mb-4 flex items-center gap-2">
                <Target size={20} /> Objectifs 3E
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Aider les jeunes à prendre confiance.</li>
                <li>• Donner des repères sur les bonnes pratiques.</li>
                <li>• Identifier points forts et axes d'amélioration.</li>
                <li>• Faire comprendre les attentes des employeurs.</li>
              </ul>
           </div>
           <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#fece09]">
              <h3 className="font-black uppercase text-[#00246c] mb-4 flex items-center gap-2">
                <Award size={20} /> Conseils Auditeurs
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Bienveillance :</strong> Créer un climat de confiance.</li>
                <li>• <strong>Structure :</strong> Guider l'échange.</li>
                <li>• <strong>Positif :</strong> Valoriser les points forts.</li>
                <li>• <strong>Constructif :</strong> Proposer des axes d'amélioration.</li>
              </ul>
           </div>
        </div>

        {/* Sections de Questions */}
        <h2 className="text-2xl font-black uppercase text-[#00246c] mb-6 border-b border-gray-200 pb-2">Trame de l'entretien</h2>
        
        <div className="space-y-6">
          <QuestionSection 
            number="1" 
            title="Présentation et Parcours" 
            questions={[
              "Pouvez-vous vous présenter en quelques mots ?",
              "Si vous deviez expliquer votre parcours en une minute, que diriez-vous ?",
              "Pourquoi avez-vous choisi cette formation ?",
              "Une expérience personnelle a-t-elle influencé votre choix ?",
              "Quels défis avez-vous rencontrés dans votre parcours ?"
            ]} 
          />
          
          <QuestionSection 
            number="2" 
            title="Motivation et Implication" 
            questions={[
              "Pourquoi souhaitez-vous travailler dans ce domaine ?",
              "Avez-vous accompli un projet dont vous êtes fier ?",
              "Qu'est-ce qui vous motive à vous lever le matin ?",
              "Comment réagissez-vous face aux critiques constructives ?",
              "Préférez-vous travailler seul ou en équipe ?"
            ]} 
          />

          <QuestionSection 
            number="3" 
            title="Compétences et Savoir-être" 
            questions={[
              "Quelles compétences techniques avez-vous acquises ?",
              "Comment vous organisez-vous pour accomplir une tâche ?",
              "Avez-vous déjà dû résoudre un problème complexe ?",
              "Que signifie pour vous 'avoir l'esprit d'initiative' ?",
              "Comment gérez-vous le stress ?"
            ]} 
          />

          <QuestionSection 
            number="4" 
            title="Attentes Professionnelles" 
            questions={[
              "Qu'attendez-vous de votre premier emploi ?",
              "Comment vous projetez-vous dans cinq ans ?",
              "Êtes-vous à l'aise avec l'idée de travailler sous supervision ?",
              "Préférez-vous un cadre structuré ou flexible ?",
              "Quelle importance accordez-vous aux valeurs de l'entreprise ?"
            ]} 
          />

           <QuestionSection 
            number="5" 
            title="Centres d'intérêts" 
            questions={[
              "Avez-vous des passions ou des loisirs particuliers ?",
              "Une activité associative ou bénévole ?",
              "Quel livre, film ou série vous a marqué ?",
              "Y a-t-il un domaine dans lequel vous aimeriez progresser ?",
              "Comment vos intérêts peuvent-ils servir dans un cadre pro ?"
            ]} 
          />
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm pb-8">
            <p>Ce guide n'est pas exhaustif. L'authenticité de l'échange prime sur la liste des questions.</p>
        </div>

      </div>
    </div>
  );
};

// Sous-composant pour les sections de questions
const QuestionSection = ({ number, title, questions }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div className="bg-gray-100 px-6 py-4 border-l-4 border-[#00246c] flex items-center gap-4">
      <span className="bg-[#00246c] text-white font-black w-8 h-8 flex items-center justify-center rounded-full text-sm">
        {number}
      </span>
      <h3 className="font-bold text-gray-800 text-lg uppercase">{title}</h3>
    </div>
    <div className="p-6">
      <ul className="space-y-3">
        {questions.map((q, idx) => (
          <li key={idx} className="flex items-start text-gray-600">
            <span className="text-[#fece09] mr-2 mt-1">•</span>
            {q}
          </li>
        ))}
      </ul>
    </div>
  </div>
);


// --- NAVIGATION PRINCIPALE ---
const Navigation = ({ onNavigate, onGuideClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Étudiants", href: "#students" },
    { name: "Professionnels", href: "#auditors" },
    { name: "Contact", href: "#infos" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex items-center justify-center">
              {/* Logo Rotary International (Source externe/wikimedia) */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Rotary_International_Logo.svg" 
                alt="Logo Roue Rotary" 
                className="h-16 w-auto" 
              />
            </div>
            <div className="flex flex-col justify-center h-full">
              <span className={`font-black text-3xl tracking-tighter leading-none ${RotaryTheme.textBlue} uppercase`}>Rotary</span>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Thionville St-Exupéry</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 h-full items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                   onNavigate('home');
                }}
                className={`text-gray-600 hover:text-[#00246c] font-bold text-sm uppercase tracking-wider transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-[#fece09]`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onGuideClick}
              className="flex items-center gap-2 text-[#00246c] font-bold uppercase text-sm hover:text-[#fece09] transition-colors"
            >
              <BookOpen size={18} /> Guide Auditeur
            </button>
            <a 
              href="https://chk.me/04ZCihb" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${RotaryTheme.gold} text-[#00246c] font-black uppercase text-sm px-6 py-3 hover:bg-opacity-90 transition-all shadow-sm`}
            >
              S'inscrire
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#00246c] p-2 focus:outline-none">
              {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => { setIsOpen(false); onNavigate('home'); }}
                className="block px-3 py-3 text-base font-bold text-gray-800 uppercase hover:bg-gray-50 hover:text-[#00246c]"
              >
                {link.name}
              </a>
            ))}
             <button 
                onClick={() => { setIsOpen(false); onGuideClick(); }}
                className="block w-full text-left px-3 py-3 text-base font-bold text-[#00246c] uppercase bg-blue-50"
              >
                Guide Auditeur
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- SECTIONS PAGE D'ACCUEIL ---
const Hero = ({ onGuideClick }) => {
  return (
    <div id="home" className="relative bg-gray-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 transform skew-x-12 translate-x-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-1/2 py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <span className={`font-bold tracking-widest uppercase mb-4 ${RotaryTheme.textGold} flex items-center gap-2`}>
              <span className="h-1 w-8 bg-[#fece09]"></span> Événement 2026
            </span>
            <h1 className={`text-5xl md:text-6xl font-black ${RotaryTheme.textBlue} leading-tight mb-6 uppercase`}>
              Agir pour <br/>votre avenir
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-light">
              L'Opération 3E : Un entraînement intensif à l'entretien d'embauche.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#students" className={`${RotaryTheme.royalBlue} text-white font-bold uppercase tracking-wide px-8 py-4 text-center hover:opacity-90 transition-all flex items-center justify-center gap-2`}>
                Espace Étudiant <ArrowRight size={20} />
              </a>
              <button onClick={onGuideClick} className="bg-white border-2 border-[#00246c] text-[#00246c] font-bold uppercase tracking-wide px-8 py-4 text-center hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                <BookOpen size={20} /> Guide Auditeur
              </button>
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

          <div className="lg:w-1/2 bg-[#00246c] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
             </div>
             <div className="p-12 text-center text-white z-10">
                {/* Logo Opération 3E (Fichier local) */}
                <img 
                  src="logo3E.png" 
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
          <h3 className={`text-4xl font-black uppercase ${RotaryTheme.textBlue}`}>Pour les Étudiants</h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            Préparez-vous concrètement avec des ateliers thématiques et des mises en situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 bg-gray-50">
          {workshops.map((ws, idx) => (
            <div key={idx} className="group p-8 border-b border-r border-gray-200 hover:bg-white transition-colors duration-300">
              <div className={`w-14 h-14 ${RotaryTheme.royalBlue} text-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#fece09] group-hover:text-[#00246c] transition-colors`}>
                {ws.icon}
              </div>
              <h4 className={`text-xl font-bold ${RotaryTheme.textBlue} mb-3 uppercase`}>{ws.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{ws.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <h4 className={`text-2xl font-black uppercase ${RotaryTheme.textBlue} mb-8 flex items-center`}>
              <Briefcase className="mr-3 text-[#fece09]" /> Checklist du Jour J
            </h4>
            <div className="bg-gray-50 p-8 border-l-4 border-[#00246c]">
              <ul className="space-y-4">
                <li className="flex items-start"><CheckCircle className="text-[#00246c] mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-800 font-medium">Fiche d'engagement remplie (obligatoire).</span></li>
                <li className="flex items-start"><CheckCircle className="text-[#00246c] mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-800 font-medium">CV imprimé en <strong>double exemplaire</strong>.</span></li>
                <li className="flex items-start"><CheckCircle className="text-[#00246c] mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-800 font-medium">Une offre d'emploi ciblée.</span></li>
                <li className="flex items-start"><CheckCircle className="text-[#00246c] mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-800 font-medium">Tenue professionnelle exigée.</span></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 font-bold uppercase mb-2">Besoin spécifique ?</p>
                <p className="text-gray-700 text-sm">Pour un entretien en langue étrangère, contactez-nous : <br/><a href="mailto:Fxroyer46@gmail.com" className="text-[#00246c] font-bold underline">Fxroyer46@gmail.com</a></p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-[#00246c] p-10 text-white flex flex-col items-center justify-center text-center">
            <h4 className="text-2xl font-black uppercase mb-4 text-[#fece09]">Inscription</h4>
            <p className="mb-8 text-blue-100">L'inscription est un engagement ferme. Scannez le QR code ou utilisez le lien ci-dessous.</p>
            <a href="https://chk.me/04ZCihb" target="_blank" rel="noopener noreferrer" className="bg-[#fece09] text-[#00246c] font-black uppercase py-4 px-10 hover:bg-white transition-colors w-full sm:w-auto inline-block">S'inscrire Maintenant</a>
            <p className="mt-4 text-xs text-blue-300 opacity-60 uppercase tracking-widest">Via Check.me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section modifiée pour inclure le lien vers le Guide
const AuditorSection = ({ onGuideClick }) => {
  return (
    <div id="auditors" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-300 pb-8">
            <div>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Partenaires & Professionnels</h2>
                <h3 className={`text-4xl font-black uppercase ${RotaryTheme.textBlue}`}>Instructions Auditeurs</h3>
            </div>
            <div className="mt-4 md:mt-0">
                <button 
                  onClick={onGuideClick}
                  className={`flex items-center gap-2 px-6 py-3 ${RotaryTheme.gold} text-[#00246c] font-bold uppercase text-xs tracking-wider shadow hover:opacity-90`}
                >
                    <BookOpen size={16} /> Voir le Guide d'entretien 2026
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm border-t-4 border-[#00246c]">
                <div className="flex items-center gap-3 mb-6"><Info className="text-[#00246c]" size={28} /><h4 className="text-xl font-black uppercase text-gray-800">Logistique</h4></div>
                <p className="text-gray-600 mb-4">Présentez-vous à l'accueil de l'IUT. Des listes de passage vous seront remises.</p>
            </div>
            <div className="bg-white p-8 shadow-sm border-t-4 border-[#fece09]">
                <div className="flex items-center gap-3 mb-6"><Clock className="text-[#c6a006]" size={28} /><h4 className="text-xl font-black uppercase text-gray-800">Timing</h4></div>
                <p className="text-gray-600 mb-4">Suivez scrupuleusement la <strong>liste de passage</strong> pour assurer la fluidité.</p>
            </div>
            <div className="bg-white p-8 shadow-sm border-t-4 border-[#00246c]">
                <div className="flex items-center gap-3 mb-6"><Award className="text-[#00246c]" size={28} /><h4 className="text-xl font-black uppercase text-gray-800">Mission</h4></div>
                <ul className="space-y-3">
                    <li className="text-gray-600 text-sm border-b border-gray-100 pb-2"><strong className="text-[#00246c] block uppercase text-xs mb-1">Action</strong>Mener 2 simulations d'entretien par candidat.</li>
                    <li className="text-gray-600 text-sm"><strong className="text-[#00246c] block uppercase text-xs mb-1">Objectif</strong>Retour constructif et bienveillant.</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onNavigate }) => {
  return (
    <footer id="infos" className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black uppercase mb-6 tracking-wider">Rotary Thionville St-Exupéry</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">Nous sommes des décideurs qui passons à l'action.</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#fece09] transition-colors uppercase text-sm font-bold">Accueil</button></li>
              <li><a href="#students" onClick={() => onNavigate('home')} className="hover:text-[#fece09] transition-colors uppercase text-sm font-bold">Étudiants</a></li>
              <li><a href="#auditors" onClick={() => onNavigate('home')} className="hover:text-[#fece09] transition-colors uppercase text-sm font-bold">Professionnels</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-4 text-gray-400 text-sm">
               <p className="flex items-center gap-3"><Mail size={18} className="text-[#fece09]" /> Fxroyer46@gmail.com</p>
               <p className="flex items-center gap-3"><span className="text-[#fece09] font-bold">TEL</span> 06 14 37 40 70</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; 2026 Rotary Club Thionville Saint-Exupéry.</p>
        </div>
      </div>
    </footer>
  );
};

// --- COMPOSANT PRINCIPAL APP ---
export default function App() {
  const [view, setView] = useState('home'); // 'home' ou 'guide'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (targetView) => {
    setView(targetView);
    scrollToTop();
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen selection:bg-[#fece09] selection:text-[#00246c]">
      {view === 'home' ? (
        <>
          <Navigation onNavigate={handleNavigate} onGuideClick={() => handleNavigate('guide')} />
          <Hero onGuideClick={() => handleNavigate('guide')} />
          <StudentSection />
          <AuditorSection onGuideClick={() => handleNavigate('guide')} />
          <Footer onNavigate={handleNavigate} />
        </>
      ) : (
        <AuditorGuide onBack={() => handleNavigate('home')} />
      )}
    </div>
  );
}
