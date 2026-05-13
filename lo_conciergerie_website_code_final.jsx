"use client"

import { useState } from "react"

export default function LOConciergerieWebsite() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-black text-white font-serif scroll-smooth">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center px-8 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.25em] text-yellow-500 uppercase mb-8">
            L.O Conciergerie
          </h1>

          <p className="text-2xl md:text-4xl text-white leading-relaxed mb-8">
            Gestion haut de gamme de vos locations courte durée.
          </p>

          <p className="text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Votre bien. Notre expertise. Votre sérénité.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="bg-yellow-500 text-black px-10 py-5 rounded-full text-lg hover:scale-105 transition font-semibold"
            >
              Demander une estimation
            </a>

            <a
              href="#offres"
              className="border border-yellow-500 text-yellow-500 px-10 py-5 rounded-full text-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Découvrir nos offres
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl text-yellow-500 mb-6">Nos Services</h2>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
              Une gestion complète et premium pour maximiser vos revenus Airbnb.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Création & optimisation annonces",
              "Diffusion multi-plateformes",
              "Gestion voyageurs 7j/7",
              "Coordination ménage & linge",
              "Accueil autonome voyageurs",
              "Gestion complète des séjours",
            ].map((service, index) => (
              <div
                key={index}
                className="border border-yellow-700 rounded-3xl p-10 bg-black hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-2xl text-yellow-500 mb-4">{service}</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Service premium pensé pour offrir une expérience haut de gamme aux propriétaires et voyageurs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offres" className="px-8 py-24 border-y border-yellow-700 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl text-yellow-500 mb-6">Nos Offres</h2>
            <p className="text-zinc-400 text-xl">
              Deux formules adaptées à votre niveau d’accompagnement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="border border-zinc-700 rounded-3xl p-12 bg-zinc-950">
              <h3 className="text-4xl text-yellow-500 mb-4">Offre Confort</h3>
              <p className="text-6xl mb-8 font-light">25%</p>

              <ul className="space-y-4 text-zinc-300 text-lg">
                <li>✔ Création & optimisation annonces</li>
                <li>✔ Diffusion multi-plateformes</li>
                <li>✔ Gestion voyageurs 7j/7</li>
                <li>✔ Coordination ménage & linge</li>
                <li>✔ Accueil autonome voyageurs</li>
              </ul>
            </div>

            <div className="border-2 border-yellow-500 rounded-3xl p-12 bg-yellow-500 text-black relative shadow-2xl">
              <div className="absolute top-6 right-6 bg-black text-yellow-500 px-4 py-2 rounded-full text-sm uppercase tracking-widest">
                Recommandée
              </div>

              <h3 className="text-4xl mb-4">Offre Prestige</h3>
              <p className="text-6xl mb-8 font-light">30%</p>

              <ul className="space-y-4 text-lg">
                <li>✔ Tous les services Confort</li>
                <li>✔ Pricing dynamique</li>
                <li>✔ Reporting propriétaire</li>
                <li>✔ Coordination dépannage</li>
                <li>✔ Expérience voyageurs premium</li>
                <li>✔ Valorisation haut de gamme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="px-8 py-24 bg-zinc-950 border-y border-yellow-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl text-yellow-500 mb-6">
              Services Complémentaires
            </h2>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
              Des prestations premium disponibles sur demande pour valoriser davantage votre bien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-yellow-700 rounded-3xl p-10 bg-black">
              <h3 className="text-3xl text-yellow-500 mb-6">
                Shooting Photo Professionnel
              </h3>

              <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                Photos premium optimisées Airbnb.
              </p>

              <p className="text-yellow-500 uppercase tracking-widest text-sm">
                Sur devis • Paiement unique
              </p>
            </div>

            <div className="border border-yellow-700 rounded-3xl p-10 bg-black">
              <h3 className="text-3xl text-yellow-500 mb-6">
                Panier de Bienvenue
              </h3>

              <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                Produits locaux et accueil premium.
              </p>

              <p className="text-yellow-500 uppercase tracking-widest text-sm">
                Tarif personnalisé
              </p>
            </div>

            <div className="border border-yellow-700 rounded-3xl p-10 bg-black">
              <h3 className="text-3xl text-yellow-500 mb-6">
                Accompagnement Premium
              </h3>

              <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                Optimisation rentabilité & valorisation du bien.
              </p>

              <p className="text-yellow-500 uppercase tracking-widest text-sm">
                Étude personnalisée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-24 bg-black border-t border-yellow-700">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl text-yellow-500 mb-6">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Quels types de biens gérez-vous ?',
                a: 'Nous accompagnons les appartements, maisons et biens premium destinés à la location courte durée à Périgueux et en Dordogne.',
              },
              {
                q: 'Sur quelles plateformes diffusez-vous les annonces ?',
                a: 'Nous diffusons principalement sur Airbnb et Booking.com afin de maximiser votre visibilité.',
              },
              {
                q: 'Comment sont fixés les tarifs des locations ?',
                a: 'Nos outils de pricing dynamique ajustent les prix selon la saison et la demande.',
              },
              {
                q: 'Puis-je déléguer toute la gestion ?',
                a: 'Oui. Notre objectif est de vous offrir une gestion 100% déléguée et sans contraintes.',
              },
            ].map((faq, index) => (
              <div key={index} className="border border-yellow-700 rounded-3xl p-8 bg-zinc-950">
                <h3 className="text-2xl text-yellow-500 mb-4">{faq.q}</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl text-yellow-500 mb-6">Contact</h2>

          <p className="text-zinc-300 text-xl mb-12">
            Confiez votre bien à une conciergerie premium.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-6 text-left">
            <input
              type="text"
              placeholder="Nom"
              className="bg-black border border-zinc-700 rounded-2xl px-6 py-5 text-white"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-black border border-zinc-700 rounded-2xl px-6 py-5 text-white"
            />

            <textarea
              placeholder="Description du bien"
              rows="6"
              className="bg-black border border-zinc-700 rounded-2xl px-6 py-5 text-white"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-500 text-black py-4 rounded-2xl text-xl hover:scale-[1.02] transition font-semibold"
            >
              Envoyer la demande
            </button>

            {sent && (
              <div className="border border-green-500 bg-green-500/10 text-green-400 rounded-2xl p-4 text-center">
                Votre demande a bien été envoyée.
              </div>
            )}
          </form>

          <div className="mt-16 space-y-4 text-zinc-400 text-lg">
            <p>📧 contactloconciergerie@gmail.com</p>

            <a
              href="https://www.instagram.com/lo.conciergerie"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-yellow-500 transition"
            >
              📱 @lo.conciergerie
            </a>

            <p>🌐 loconciergerie.fr</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-yellow-700 py-12 text-center text-zinc-500 bg-black">
        <div className="space-y-4">
          <p className="text-lg text-zinc-400">
            L.O Conciergerie — Gestion Airbnb haut de gamme à Périgueux & Dordogne
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest">
            <span>Conciergerie Airbnb</span>
            <span>Gestion location courte durée</span>
            <span>Périgueux</span>
            <span>Dordogne</span>
          </div>

          <p className="text-sm text-zinc-600 pt-4">
            © 2026 L.O Conciergerie — loconciergerie.fr
          </p>
        </div>
      </footer>
    </div>
  )
}
