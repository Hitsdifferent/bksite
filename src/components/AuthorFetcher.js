'use client';

import { useEffect, useState } from 'react';
import { getAuthor } from '@/lib/sanity';

export default function AuthorFetcher({ children }) {
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getAuthor();
      setAuthor(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p>Laden...</p>;

  return children(author); // Render-props pattern: geeft author door aan children
}