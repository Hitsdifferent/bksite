'use client';

import { useEffect, useState } from 'react';
import { getServices, client } from '@/lib/sanity';

export default function ServiceFetcher({ children }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getServices();
      setServices(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p>Laden...</p>;

  return children(services);
}
