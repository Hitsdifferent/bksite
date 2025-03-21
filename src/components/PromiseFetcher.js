'use client';

import { useEffect, useState } from 'react';
import { getPromise, client } from '@/lib/sanity'; // Zorg ervoor dat je 'client' importeert

export default function PromiseFetcher({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getPromise();
      setData(fetchedData);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p>Laden...</p>;

  return children(data); // Render-props pattern: geeft data door aan children
}
