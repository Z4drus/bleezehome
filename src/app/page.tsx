'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Settings, FileCode2 } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  const [isPatchNoteOpen, setIsPatchNoteOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const devResources = [
    {
      name: "GitHub",
      description: "Plateforme de développement collaboratif.",
      logo: "/logos/logo-github.svg",
      url: "https://github.com/",
      category: "Développement"
    },
    {
      name: "Cursor AI",
      description: "Logiciel IA pour le développement.",
      logo: "/logos/logo-cursor.svg",
      url: "https://www.cursor.com/",
      category: "Développement"
    },
    {
      name: "v0",
      description: "Site IA pour le développement frontend.",
      logo: "/logos/logo-v0.svg",
      url: "https://v0.dev/",
      category: "Développement"
    },
    {
      name: "Uiverse",
      description: "Répertoire de composants UI.",
      logo: "/logos/logo-uiverse.svg",
      url: "https://uiverse.io/",
      category: "Développement"
    }
  ]

  const designResources = [
    {
      name: "Dribbble",
      description: "Inspiration et portfolios design.",
      logo: "/logos/logo-dribbble.svg",
      url: "https://dribbble.com",
      category: "Design"
    },
    {
      name: "Figma",
      description: "Outil de design collaboratif.",
      logo: "/logos/logo-figma.svg",
      url: "https://figma.com",
      category: "Design"
    },
    {
      name: "Behance",
      description: "Plateforme créative Adobe.",
      logo: "/logos/logo-behance.svg",
      url: "https://behance.net",
      category: "Design"
    },
    {
      name: "Coolors",
      description: "Générateur de palettes de couleurs.",
      logo: "/logos/logo-coolors.svg",
      url: "https://coolors.co",
      category: "Design"
    }
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="container mx-auto mb-8 flex items-center justify-between">
        <div className="select-none">
          <h1 className="text-4xl font-bold">Dev / Design Home</h1>
          <p className="text-muted-foreground">v0.1 - By Bleeze</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isPatchNoteOpen} onOpenChange={setIsPatchNoteOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <FileCode2 className="h-4 w-4" />
                <span className="sr-only">Notes de patch</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Patch Notes</DialogTitle>
                <DialogDescription>
                  Voici les dernières mises à jour du Home :
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                {/* Version 0.3 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Version 0.3</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>A venir</li>
                  </ul>
                </div>
                {/* Version 0.2 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Version 0.2</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>A venir</li>
                  </ul>
                </div>

                {/* Version 0.1*/}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Version 0.1</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Première version du site mise en ligne.</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Paramètres</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Paramètres</DialogTitle>
                <DialogDescription>
                  Configurez vos préférences pour Dev / Design Home
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                  Activer le mode sombre
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                  Afficher les ressources récentes en premier
                </label>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="container mx-auto">
        <Tabs defaultValue="dev" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="dev">Développement</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>

          <TabsContent value="dev" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {devResources.map((resource) => (
                <Link href={resource.url} key={resource.name} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full transition-colors hover:bg-muted/50">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Image
                        src={resource.logo}
                        alt={`${resource.name} logo`}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <CardTitle className="text-xl">{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="design" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {designResources.map((resource) => (
                <Link href={resource.url} key={resource.name} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full transition-colors hover:bg-muted/50">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Image
                        src={resource.logo}
                        alt={`${resource.name} logo`}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <CardTitle className="text-xl">{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}