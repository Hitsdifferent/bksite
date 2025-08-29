'use client';

import { useEffect, useState } from 'react';
import { getProject } from '@/lib/sanity';

export default function ProjectFetcher({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getProject();
      setData(fetchedData);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p>Laden...</p>;

  return children(data);
}
