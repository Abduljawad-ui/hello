import React, { useState, useEffect } from 'react'
import { supabase } from '@municipality/api'
import { Card } from '@municipality/ui'

export default function App() {
  const [complaints, setComplaints] = useState<any[]>([])

  useEffect(() => {
    supabase.from('complaints').select('*, shops(*)').then(({ data }) => {
      if (data) setComplaints(data)
    })
  }, [])

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Municipal Dashboard</h1>
      <div className="grid gap-4">
        {complaints.map(c => (
          <Card key={c.id}>
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">{c.shops?.name}</h3>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">{c.status}</span>
            </div>
            <p className="mt-2">{c.description}</p>
            <p className="text-xs text-gray-400 mt-4">{new Date(c.created_at).toLocaleString()}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
