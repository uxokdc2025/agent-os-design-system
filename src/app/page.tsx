"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectItem } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const themes = [
  { key: "midnight-aubergine", label: "Midnight Aubergine" },
  { key: "together", label: "Together" },
  { key: "airtable", label: "Airtable" },
  { key: "claude", label: "Claude" },
  { key: "discord", label: "Discord" },
  { key: "elevenlabs", label: "ElevenLabs" },
  { key: "ibm", label: "IBM" },
  { key: "meta", label: "Meta" },
]

export default function DesignSystemPage() {
  const [currentTheme, setCurrentTheme] = React.useState("midnight-aubergine")
  const [colorMode, setColorMode] = React.useState("dark")
  const [dialogOpen, setDialogOpen] = React.useState(false)

  React.useEffect(() => {
    const body = document.body
    
    // Remove existing theme attributes
    themes.forEach(theme => {
      body.removeAttribute("data-design-system")
    })
    body.removeAttribute("data-color-mode")
    
    // Apply current theme
    if (currentTheme !== "midnight-aubergine") {
      body.setAttribute("data-design-system", currentTheme)
    }
    
    if (colorMode !== "dark") {
      body.setAttribute("data-color-mode", colorMode)
    }
    
    return () => {
      // Cleanup on unmount
      body.removeAttribute("data-design-system")
      body.removeAttribute("data-color-mode")
    }
  }, [currentTheme, colorMode])

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="eyebrow">
          <span className="num">I.</span>
          <div className="line"></div>
          <span className="label">Design System</span>
        </div>
        <h1 className="page-title">
          Component <em>Showcase</em>
        </h1>
        <p className="page-subtitle">
          Interactive demonstration of our shadcn/ui foundation components with semantic design tokens
          across 8 brand themes in both light and dark modes.
        </p>
      </div>

      {/* Theme Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Controls</CardTitle>
          <CardDescription>
            Switch between brand themes and color modes to see components adapt
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 items-center">
            <label className="text-sm font-medium">Brand Theme:</label>
            <Select
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.target.value)}
              className="w-48"
            >
              {themes.map((theme) => (
                <SelectItem key={theme.key} value={theme.key}>
                  {theme.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-sm font-medium">Color Mode:</label>
            <div className="flex gap-2">
              <Button
                variant={colorMode === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => setColorMode("dark")}
              >
                Dark
              </Button>
              <Button
                variant={colorMode === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => setColorMode("light")}
              >
                Light
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="buttons">
        <TabsList>
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="overlays">Overlays</TabsTrigger>
        </TabsList>

        <TabsContent value="buttons" className="space-y-6">
          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Different button styles and states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">⚙</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inputs" className="space-y-6">
          {/* Form Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
              <CardDescription>Input fields and form elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Text Input</label>
                  <Input placeholder="Enter text here..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Input</label>
                  <Input type="email" placeholder="user@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Dropdown</label>
                  <Select>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Checkbox</label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm">Accept terms and conditions</label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-6">
          {/* Card Layouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>Simple card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--cream-dim)]">
                  This is a basic card component that adapts to the current theme.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status Card</CardTitle>
                <CardDescription>Card with badges and status indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Badge>Active</Badge>
                  <Badge variant="outline">Verified</Badge>
                </div>
                <p className="text-sm text-[var(--cream-dim)]">
                  Cards can contain various components like badges and buttons.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Card with interactive elements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button size="sm" className="w-full">
                  Primary Action
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Secondary Action
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="overlays" className="space-y-6">
          {/* Dialog Example */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog Example</CardTitle>
              <CardDescription>Modal dialogs and overlays</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setDialogOpen(true)}>
                Open Dialog
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Example Dialog</DialogTitle>
            <DialogDescription>
              This is an example dialog that demonstrates themed overlay components.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input placeholder="Enter some text..." />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setDialogOpen(false)}>
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}