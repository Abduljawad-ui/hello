import React, { useState, useEffect } from 'react'
import { supabase } from '@municipality/api'
import { Button, Input, Card } from '@municipality/ui'

export default function App() {
  const [shops, setShops] = useState<any[]>([])
  const [sel, setSel] = useState<any>(null)
  const [desc, setDesc] = useState('')

  useEffect(() => {
    supabase.from('shops').select('*').then(({ data }) => data && setShops(data))
  }, [])

  const handleSubmit = async () => {
    const { error } = await supabase.from('complaints').insert({
      shop_id: sel.id,
      category: 'General',
      description: desc,
      status: 'Submitted'
    })
    if (!error) {
      alert('Complaint Submitted Successfully!')
      setSel(null)
      setDesc('')
    }
  }

  if (sel) return (
    <div className="p-4 max-w-md mx-auto">
      <button onClick={() => setSel(null)} className="mb-4 text-blue-600 underline">Back</button>
      <Card>
        <h2 className="text-xl font-bold mb-4">Report {sel.name}</h2>
        <Input
          placeholder="Describe the issue"
          value={desc}
          onChange={(e: any) => setDesc(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleSubmit} className="w-full">Submit Complaint</Button>
      </Card>
    </div>
  )

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Shops Directory</h1>
      {shops.map(s => (
        <Card key={s.id} className="flex justify-between items-center">
          <div>
            <div className="font-bold">{s.name}</div>
            <div className="text-sm text-gray-500">{s.address}</div>
          </div>
          <Button onClick={() => setSel(s)}>Report</Button>
        </Card>
      ))}
    </div>
  )
}
