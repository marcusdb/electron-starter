import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">React + Vite + Electron</CardTitle>
          <CardDescription>
            A beautiful app with TailwindCSS and shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-6xl font-bold text-primary">{count}</div>
          <p className="text-muted-foreground">
            Click the button to increment the counter
          </p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-2">
          <Button 
            variant="outline" 
            onClick={() => setCount(count - 1)}
            disabled={count <= 0}
          >
            Decrease
          </Button>
          <Button onClick={() => setCount(count + 1)}>
            Increase
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App 