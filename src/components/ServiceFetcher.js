'use client';

import { useEffect, useState } from 'react';
import { getServices } from '@/lib/sanity';

export default function ServiceFetcher({ children }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getServices(); // 👈 fix hier!
      setServices(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <p>Laden...</p>;

  return children(services); // render-props pattern
}
