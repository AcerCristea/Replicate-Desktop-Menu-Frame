import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, Project } from '../../lib/supabase';

export type FilterColumn = 'CLIENT' | 'PROJECT TYPE' | 'INDUSTRY' | 'DATE';

export function useArchiveData() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterColumn>('DATE');
  const [isReversed, setIsReversed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('Selflux_Archive')
          .select('*')
          .eq('Visible', 'TRUE')
          .order('Date', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const sortedProjects = useMemo(() => {
    const sorted = [...projects];

    switch (activeFilter) {
      case 'CLIENT':
        sorted.sort((a, b) => a.ClientName.localeCompare(b.ClientName));
        break;
      case 'PROJECT TYPE':
        sorted.sort((a, b) => a.PrimaryTag.localeCompare(b.PrimaryTag));
        break;
      case 'INDUSTRY':
        sorted.sort((a, b) => a.Industry.localeCompare(b.Industry));
        break;
      case 'DATE':
        sorted.sort((a, b) => b.Date.localeCompare(a.Date));
        break;
    }

    return isReversed ? sorted.reverse() : sorted;
  }, [projects, activeFilter, isReversed]);

  const handleFilterChange = (filter: FilterColumn) => {
    if (filter === activeFilter) {
      // Toggle reverse order if clicking the same filter
      setIsReversed(!isReversed);
    } else {
      // Switch to new filter and reset to normal order
      setActiveFilter(filter);
      setIsReversed(false);
    }
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return {
    projects: sortedProjects,
    loading,
    activeFilter,
    isReversed,
    handleFilterChange,
    handleProjectClick,
  };
}
