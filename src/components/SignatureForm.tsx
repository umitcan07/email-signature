import { useSignatureStore } from '@/store/signatureStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BANNER_OPTIONS } from '@/constants/banners'


export const SignatureForm = () => {
  const { data, selectedTemplate, updateField, updateTemplate } = useSignatureStore()

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

        {/* Employee Details */}
        <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
          <h3 className="text-lg font-semibold">Employee Details</h3>

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

          <div className="space-y-2">
            <Label htmlFor="avatarPhotoUrl">Avatar Photo URL</Label>
            <Input
              id="avatarPhotoUrl"
              value={data.avatarPhotoUrl}
              onChange={(e) => handleInputChange('avatarPhotoUrl', e.target.value)}
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          {/* Personal Social Links */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">Personal Social Links</h4>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="showTelegram"
                  checked={data.showTelegram}
                  onCheckedChange={(checked: boolean) => updateField('showTelegram', checked)}
                />
                <Label htmlFor="showTelegram">Show Telegram</Label>
              </div>
              {data.showTelegram && (
                <div className="ml-6 space-y-2">
                  <Label htmlFor="telegramUsername">Telegram Username</Label>
                  <Input
                    id="telegramUsername"
                    value={data.telegramUsername || ''}
                    onChange={(e) => handleInputChange('telegramUsername', e.target.value)}
                    placeholder="username"
                  />
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="showLinkedin"
                  checked={data.showLinkedin}
                  onCheckedChange={(checked: boolean) => updateField('showLinkedin', checked)}
                />
                <Label htmlFor="showLinkedin">Show LinkedIn</Label>
              </div>
              {data.showLinkedin && (
                <div className="ml-6 space-y-2">
                  <Label htmlFor="linkedinUsername">LinkedIn Username</Label>
                  <Input
                    id="linkedinUsername"
                    value={data.linkedinUsername || ''}
                    onChange={(e) => handleInputChange('linkedinUsername', e.target.value)}
                    placeholder="username"
                  />
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="showTwitter"
                  checked={data.showTwitter}
                  onCheckedChange={(checked: boolean) => updateField('showTwitter', checked)}
                />
                <Label htmlFor="showTwitter">Show Twitter</Label>
              </div>
              {data.showTwitter && (
                <div className="ml-6 space-y-2">
                  <Label htmlFor="twitterUsername">Twitter Username</Label>
                  <Input
                    id="twitterUsername"
                    value={data.twitterUsername || ''}
                    onChange={(e) => handleInputChange('twitterUsername', e.target.value)}
                    placeholder="username"
                  />
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="showCalendar"
                  checked={data.showCalendar}
                  onCheckedChange={(checked: boolean) => updateField('showCalendar', checked)}
                />
                <Label htmlFor="showCalendar">Show Calendar</Label>
              </div>
              {data.showCalendar && (
                <div className="ml-6 space-y-2">
                  <Label htmlFor="calendarUrl">Calendar URL</Label>
                  <Input
                    id="calendarUrl"
                    value={data.calendarUrl || ''}
                    onChange={(e) => handleInputChange('calendarUrl', e.target.value)}
                    placeholder="https://calendly.com/username"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Details */}
        <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
          <h3 className="text-lg font-semibold">Footer Details</h3>

          {/* Banner */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">Promotional Banner</h4>

            <div className="space-y-2">
              <Label htmlFor="selectedBanner">Banner Type</Label>
              <Select
                value={data.selectedBanner}
                onValueChange={(value) => updateField('selectedBanner', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a banner" />
                </SelectTrigger>
                <SelectContent>
                  {BANNER_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {data.selectedBanner === 'custom' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="customBannerUrl">Custom Banner Image URL</Label>
                  <Input
                    id="customBannerUrl"
                    value={data.customBannerUrl}
                    onChange={(e) => handleInputChange('customBannerUrl', e.target.value)}
                    placeholder="https://example.com/banner.jpg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customBannerHref">Custom Banner Link URL</Label>
                  <Input
                    id="customBannerHref"
                    value={data.customBannerHref}
                    onChange={(e) => handleInputChange('customBannerHref', e.target.value)}
                    placeholder="https://company.com/promotion"
                  />
                </div>
              </>
            )}
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
          <h3 className="text-lg font-semibold">Legal Disclaimer</h3>

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
        </div>
      </CardContent>
    </Card>
  )
}
