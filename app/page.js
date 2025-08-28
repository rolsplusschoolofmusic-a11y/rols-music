import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Globe, Music, Phone, Star, Video, ArrowRight, Shield, HeartHandshake, CalendarCheck } from "lucide-react";

// --- Utility: currency formatting with three markets ---
const CURRENCIES = {
  USD: { symbol: "$", rate: 1, locale: "en-US" },
  GBP: { symbol: "£", rate: 0.78, locale: "en-GB" },
  AED: { symbol: "AED ", rate: 3.67, locale: "en-AE" },
};

const convert = (usd, cur) => {
  const c = CURRENCIES[cur] ?? CURRENCIES.USD;
  const value = usd * (cur === "AED" ? c.rate : cur === "GBP" ? c.rate : 1);
  const symbol = c.symbol;
  return `${symbol}${cur === "AED" ? value.toFixed(0) : value.toFixed(0)}`;
};

const programs = [
  { name: "Guitar", blurb: "Acoustic & Electric • Trinity/LCM prep", icon: "🎸" },
  { name: "Piano/Keys", blurb: "Classical & Contemporary • ABRSM/Trinity", icon: "🎹" },
  { name: "Voice", blurb: "Vocal technique • Worship leading", icon: "🎤" },
  { name: "Drums", blurb: "Groove, rudiments & styles", icon: "🥁" },
  { name: "Music Theory", blurb: "Grades • Ear training • Notation", icon: "🎼" },
];

const testimonials = [
  { name: "Ava, USA", quote: "My son looks forward to every class—structured, fun, and faith-positive!", rating: 5 },
  { name: "Daniel, UK", quote: "Clear progress each month. The online recitals are brilliant.", rating: 5 },
  { name: "Mariam, UAE", quote: "Flexible timings and professional teachers. Highly recommend.", rating: 5 },
];

export default function Site() {
  const [currency, setCurrency] = useState("USD");
  const [region, setRegion] = useState("US");

  const contact = useMemo(() => ({
    US: { phone: "+1 (555) 123‑4567", whatsapp: "https://wa.me/15551234567" },
    UK: { phone: "+44 20 1234 5678", whatsapp: "https://wa.me/442012345678" },
    UAE: { phone: "+971 50 123 4567", whatsapp: "https://wa.me/971501234567" },
  })[region], [region]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo mark: blue guitar silhouette */}
            <div className="w-9 h-9 rounded-xl bg-blue-500 grid place-content-center shadow-sm">
              <Music className="w-5 h-5 text-white" />
            </div>
            <div className="font-extrabold text-xl tracking-tight">ROL’s<span className="ml-1">+</span> <span className="font-semibold text-slate-600">School of Music</span></div>
            <Badge className="ml-3 bg-blue-600">Online</Badge>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#programs" className="hover:text-blue-700">Programs</a>
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#why" className="hover:text-blue-700">Why Us</a>
            <a href="#testimonials" className="hover:text-blue-700">Reviews</a>
            <a href="#trial" className="hover:text-blue-700">Free Trial</a>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <select className="border rounded-lg px-2 py-1" value={region} onChange={(e)=>setRegion(e.target.value)}>
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="UAE">UAE</option>
              </select>
              <select className="border rounded-lg px-2 py-1" value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                {Object.keys(CURRENCIES).map(k=> <option key={k} value={k}>{k}</option>)}
              </select>
            </div>
            <Button asChild className="rounded-2xl">
              <a href="#trial">Book Free Trial</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Learn Music. <span className="text-blue-600">Anytime</span>. Anywhere.
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Live 1‑to‑1 and group lessons for Guitar, Piano, Voice, Drums & Theory. International syllabi, flexible timings, and uplifting faith-forward culture.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#trial" className="flex items-center gap-2">Book Free Trial <ArrowRight className="w-4 h-4"/></a>
              </Button>
              <Button variant="outline" asChild className="rounded-2xl">
                <a href="#programs" className="flex items-center gap-2"><Video className="w-4 h-4"/> See Programs</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4"/> Safe, moderated classes</div>
              <div className="flex items-center gap-2"><CalendarCheck className="w-4 h-4"/> Flexible time zones</div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.15}} className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-blue-500 to-blue-400 p-1 shadow-xl">
              <div className="w-full h-full rounded-[20px] bg-white grid place-items-center">
                {/* Placeholder guitar emblem */}
                <div className="w-40 h-40 rounded-full bg-blue-500/10 border border-blue-200 grid place-content-center">
                  <Music className="w-20 h-20 text-blue-600"/>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rotate-3">
              <Badge className="bg-blue-600/90 shadow-md">Trusted by families in US • UK • UAE</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl font-bold">Programs</h2>
            <p className="text-slate-600">Live online • Beginner to Advanced • Exam prep available</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p)=> (
              <Card key={p.name} className="rounded-2xl shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl" aria-hidden>{p.icon}</span>
                    {p.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">{p.blurb}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Why ROL’s+?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              title: "International Standards",
              desc: "Trinity/ABRSM pathways, structured progress and report cards.",
            },{
              title: "Faith + Excellence",
              desc: "Character‑building environment that encourages purpose and creativity.",
            },{
              title: "Global Schedules",
              desc: "US/UK/UAE time‑zones with weekend and evening slots.",
            }].map((f)=> (
              <Card key={f.title} className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600"/> {f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">{f.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl font-bold">Pricing</h2>
            <div className="flex items-center gap-2 text-sm">
              <span>Currency:</span>
              <select className="border rounded-lg px-2 py-1" value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                {Object.keys(CURRENCIES).map(k=> <option key={k} value={k}>{k}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Group */}
            <Card className="rounded-2xl shadow-sm border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl">Group Class</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-extrabold">{convert(39, currency)}<span className="text-base font-semibold text-slate-500">/mo</span></p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-blue-600"/> 4 live sessions / month</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-blue-600"/> Small cohorts (≤6)</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-blue-600"/> Practice tracks + feedback</li>
                </ul>
                <Button asChild className="mt-6 w-full rounded-2xl"><a href="#trial">Start Free Trial</a></Button>
              </CardContent>
            </Card>

            {/* 1:1 Standard */}
            <Card className="rounded-2xl shadow-md border-blue-400 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">Most Popular</Badge>
              <CardHeader>
                <CardTitle className="text-xl">1:1 Standard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-extrabold">{convert(89, currency)}<span className="text-base font-semibold text-slate-500">/mo</span></p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-blue-600"/> 4 private lessons / month</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-blue-600"/> Personalized plan + reports</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-blue-600"/> Exam prep (optional)</li>
                </ul>
                <Button asChild className="mt-6 w-full rounded-2xl"><a href="#trial">Start Free Trial</a></Button>
              </CardContent>
            </Card>

            {/* 1:1 Premium */}
            <Card className="rounded-2xl shadow-sm border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl">1:1 Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-extrabold">{convert(129, currency)}<span className="text-base font-semibold text-slate-500">/mo</span></p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-blue-600"/> 8 private lessons / month</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-blue-600"/> Jury + recital access</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 mt-1 text-blue-600"/> Priority scheduling</li>
                </ul>
                <Button asChild className="mt-6 w-full rounded-2xl"><a href="#trial">Start Free Trial</a></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Families love learning with us</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {testimonials.map((t)=> (
              <Card key={t.name} className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500"/>
                    {t.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 italic">“{t.quote}”</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRIAL FORM */}
      <section id="trial" className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-3xl shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><HeartHandshake className="w-6 h-6 text-blue-600"/> Book a Free Trial</CardTitle>
              <p className="text-slate-600">Choose your region and leave your details; our team will reach out on WhatsApp and email.</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <Input placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Instrument</label>
                  <Input placeholder="Guitar / Piano / Voice / Drums / Theory" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Region</label>
                  <select value={region} onChange={(e)=>setRegion(e.target.value)} className="border rounded-lg px-3 py-2">
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="UAE">United Arab Emirates</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Message (optional)</label>
                  <Textarea rows={4} placeholder="Tell us about your goals or schedule preferences" />
                </div>
                <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                  <Button className="rounded-2xl">Submit</Button>
                  <Button variant="outline" asChild className="rounded-2xl">
                    <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2"><Phone className="w-4 h-4"/> WhatsApp Us</a>
                  </Button>
                </div>
                <p className="text-xs text-slate-500 md:col-span-2">By submitting, you agree to be contacted for class scheduling. We never share your details.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="font-extrabold text-xl">ROL’s+ School of Music</div>
            <p className="text-slate-600 mt-2 text-sm">Online lessons across US • UK • UAE. Copyright © {new Date().getFullYear()}.</p>
          </div>
          <div className="md:text-right text-sm text-slate-600">
            <div className="flex md:justify-end gap-3">
              <Badge variant="outline" className="rounded-xl">Zoom</Badge>
              <Badge variant="outline" className="rounded-xl">Stripe</Badge>
              <Badge variant="outline" className="rounded-xl">PayPal</Badge>
              <Badge variant="outline" className="rounded-xl">Calendly</Badge>
            </div>
            <div className="mt-2">Contact: <a className="underline" href={`tel:${contact.phone}`}>{contact.phone}</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
