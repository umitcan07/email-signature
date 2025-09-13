import { SignatureForm } from './SignatureForm'
import { SignaturePreview } from './SignaturePreview'

export const SignatureGenerator = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-semibold text-foreground mb-2">
            Email Signature Generator
          </h1>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <SignatureForm />
          </div>
          <div className="space-y-6">
            <SignaturePreview />
          </div>
        </div>
      </div>
    </div>
  )
}
