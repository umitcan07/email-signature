import { useSignatureStore } from '@/store/signatureStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

export const SignatureForm = () => {
  const { data, selectedTemplate, updateField, updateTemplate } = useSignatureStore()
  const [showOptional, setShowOptional] = useState(false)

  const handleInputChange = (field: keyof typeof data, value: string) => {
    updateField(field, value)
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Email Signature Generator</CardTitle>
        <CardDescription>
          Fill in your details to generate a professional email signature
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Template Selector */}
        <div className="space-y-2">
          <Label htmlFor="template">Template</Label>
          <Select value={selectedTemplate} onValueChange={updateTemplate}>
            <SelectTrigger>
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default Template</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Job Title *</Label>
            <Input
              id="role"
              value={data.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              placeholder="Software Engineer"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="john.doe@company.com"
          />
        </div>

        {/* Avatar */}
        <div className="space-y-2">
          <Label htmlFor="avatarPhotoUrl">Avatar Photo URL</Label>
          <Input
            id="avatarPhotoUrl"
            value={data.avatarPhotoUrl}
            onChange={(e) => handleInputChange('avatarPhotoUrl', e.target.value)}
            placeholder="https://example.com/avatar.jpg"
          />
        </div>

        {/* Company Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company Information</h3>

          <div className="space-y-2">
            <Label htmlFor="companyWebsite">Company Website *</Label>
            <Input
              id="companyWebsite"
              value={data.companyWebsite}
              onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
              placeholder="https://company.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyLinkedin">Company LinkedIn</Label>
              <Input
                id="companyLinkedin"
                value={data.companyLinkedin}
                onChange={(e) => handleInputChange('companyLinkedin', e.target.value)}
                placeholder="https://linkedin.com/company/company"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyTwitter">Company Twitter</Label>
              <Input
                id="companyTwitter"
                value={data.companyTwitter}
                onChange={(e) => handleInputChange('companyTwitter', e.target.value)}
                placeholder="https://twitter.com/company"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyLogoUrl">Company Logo URL</Label>
            <Input
              id="companyLogoUrl"
              value={data.companyLogoUrl}
              onChange={(e) => handleInputChange('companyLogoUrl', e.target.value)}
              placeholder="https://example.com/logo.png"
            />
          </div>
        </div>

        {/* Banner */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Promotional Banner</h3>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="showBanner"
              checked={data.showBanner}
              onCheckedChange={(checked: boolean) => updateField('showBanner', checked)}
            />
            <Label htmlFor="showBanner">Show promotional banner</Label>
          </div>

          {data.showBanner && (
            <>
              <div className="space-y-2">
                <Label htmlFor="bannerImageUrl">Banner Image URL</Label>
                <Input
                  id="bannerImageUrl"
                  value={data.bannerImageUrl}
                  onChange={(e) => handleInputChange('bannerImageUrl', e.target.value)}
                  placeholder="https://example.com/banner.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bannerHref">Banner Link URL</Label>
                <Input
                  id="bannerHref"
                  value={data.bannerHref}
                  onChange={(e) => handleInputChange('bannerHref', e.target.value)}
                  placeholder="https://company.com/promotion"
                />
              </div>
            </>
          )}
        </div>

        {/* Disclaimer */}
        <div className="space-y-2">
          <Label htmlFor="disclaimerText">Disclaimer Text</Label>
          <Textarea
            id="disclaimerText"
            value={data.disclaimerText}
            onChange={(e) => handleInputChange('disclaimerText', e.target.value)}
            placeholder="This email and any attachments are confidential..."
            rows={4}
          />
        </div>

        {/* Optional Fields Toggle */}
        <div className="space-y-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowOptional(!showOptional)}
            className="w-full"
          >
            {showOptional ? 'Hide' : 'Show'} Optional Fields
          </Button>

          {showOptional && (
            <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
              <h3 className="text-lg font-semibold">Personal Social Links</h3>

              <div className="space-y-2">
                <Label htmlFor="telegram">Telegram Username</Label>
                <Input
                  id="telegram"
                  value={data.telegram || ''}
                  onChange={(e) => handleInputChange('telegram', e.target.value)}
                  placeholder="@username"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">Personal LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={data.linkedin || ''}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
