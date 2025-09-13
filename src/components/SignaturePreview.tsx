import { useSignatureStore } from '@/store/signatureStore'
import { EmailSignatureTemplate } from '@/emails/EmailSignatureTemplate'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { render } from '@react-email/render'
import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'

export const SignaturePreview = () => {
    const { data } = useSignatureStore()
    const [htmlString, setHtmlString] = useState('')
    const [copied, setCopied] = useState(false)
    const [showRawHtml, setShowRawHtml] = useState(false)

    useEffect(() => {
        const generateHtml = async () => {
            try {
                const html = await render(EmailSignatureTemplate({ data }))
                setHtmlString(html)
            } catch (error) {
                console.error('Error rendering email template:', error)
                setHtmlString('<p>Error rendering template</p>')
            }
        }

        generateHtml()
    }, [data])

    const handleCopyToClipboard = async () => {
        try {
            // Method 1: Try to write HTML with proper MIME type
            if (navigator.clipboard.write) {
                const htmlBlob = new Blob([htmlString], { type: 'text/html' })
                const textBlob = new Blob([htmlString], { type: 'text/plain' })

                const clipboardItem = new ClipboardItem({
                    'text/html': htmlBlob,
                    'text/plain': textBlob
                })

                await navigator.clipboard.write([clipboardItem])
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
                return
            }

            // Method 2: Create a temporary element with HTML content for better Gmail compatibility
            const tempDiv = document.createElement('div')
            tempDiv.innerHTML = htmlString
            tempDiv.style.position = 'absolute'
            tempDiv.style.left = '-9999px'
            tempDiv.style.top = '-9999px'
            document.body.appendChild(tempDiv)

            const range = document.createRange()
            range.selectNodeContents(tempDiv)
            const selection = window.getSelection()
            selection?.removeAllRanges()
            selection?.addRange(range)

            document.execCommand('copy')
            selection?.removeAllRanges()
            document.body.removeChild(tempDiv)

            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error('Failed to copy to clipboard:', error)
            // Method 3: Fallback for older browsers
            const textArea = document.createElement('textarea')
            textArea.value = htmlString
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Preview</CardTitle>
                    <CardDescription>
                        This is how your email signature will look
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Preview Mode</span>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowRawHtml(!showRawHtml)}
                            >
                                {showRawHtml ? 'Show Preview' : 'Show Raw HTML'}
                            </Button>
                        </div>

                        {showRawHtml ? (
                            <div className="border rounded-lg p-4 bg-muted/50">
                                <pre className="text-xs overflow-auto max-h-96 whitespace-pre-wrap">
                                    {htmlString}
                                </pre>
                            </div>
                        ) : (
                            <div className="border rounded-lg overflow-hidden bg-white">
                                <iframe
                                    srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <style>
                          body { 
                            margin: 0; 
                            padding: 20px; 
                            background-color: #ffffff; 
                            color: #000000;
                            font-family: Arial, sans-serif;
                          }
                          * { box-sizing: border-box; }
                        </style>
                      </head>
                      <body>
                        ${htmlString}
                      </body>
                    </html>
                  `}
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        border: 'none',
                                        backgroundColor: '#ffffff',
                                    }}
                                    title="Email Signature Preview"
                                />
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Actions</CardTitle>
                    <CardDescription>
                        Copy the generated HTML to your clipboard
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button
                        onClick={handleCopyToClipboard}
                        className="w-full"
                        disabled={!htmlString}
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4 mr-2" />
                                Copied to Clipboard!
                            </>
                        ) : (
                            <>
                                <Copy className="w-4 h-4 mr-2" />
                                Copy HTML to Clipboard
                            </>
                        )}
                    </Button>

                    <div className="text-sm text-muted-foreground space-y-2">
                        <p className="font-semibold">How to use in Gmail:</p>
                        <ol className="list-decimal list-inside space-y-1 text-xs">
                            <li>Click "Copy HTML to Clipboard" above</li>
                            <li>Go to Gmail Settings → General → Signature</li>
                            <li>Create a new signature or edit existing</li>
                            <li>Paste the copied HTML directly into the signature editor</li>
                            <li>Gmail will automatically render the HTML as a visual signature</li>
                        </ol>
                        <p className="text-xs text-green-600 dark:text-green-400">
                            ✅ HTML MIME type: The signature is copied with proper HTML formatting for Gmail
                        </p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">
                            💡 Tip: Make sure to paste in the "Rich Text" mode, not "Plain Text"
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">
                            📝 Note: Multiline disclaimer text will be preserved in the signature
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
