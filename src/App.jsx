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
  // Fonction pour simuler le téléchargement dans cet environnement de démo
  const handleDownload = (e) => {
    e.preventDefault();
    alert("Sur votre site réel (GitHub Pages), ce bouton téléchargera 'Guide_intervenant.pdf'. Ici, c'est une démo !");
    // Pour la version finale, supprimez ce onClick et utilisez simplement href="Guide_intervenant.pdf"
  };

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
            
            {/* NOTE: Sur votre site réel, remplacez le onClick par href="Guide_intervenant.pdf" */}
            <a 
              href="#"
              onClick={handleDownload}
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
