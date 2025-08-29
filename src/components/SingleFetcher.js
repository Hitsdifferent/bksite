"use client";

import { useEffect, useState } from 'react';
import { getSingle } from '@/lib/sanity';

export default function SingleFetcher({ slug, children }) { // 👈 Ontvang slug als prop
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      const fetchedData = await getSingle(slug); // 👈 Geef de slug door
      setData(fetchedData);
      setLoading(false);
    }

    fetchData();
  }, [slug]);

  if (loading) return <p>Laden...</p>;
  if (!data) return <p>Project niet gevonden.</p>;

  return children(data);
}
