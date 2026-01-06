import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '/utils/supabase/info';

const supabaseUrl = `https://${projectId}.supabase.co`;
const supabaseKey = publicAnonKey;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Project = {
  ID: string;
  ClientName: string;
  Date: string;
  Team: string;
  Filename: string;
  PrimaryTag: string;
  SecondaryTags: string[];
  Industry: string;
  Visible: string;
  Overview: string;
  Description: string;
  Captions: string[];
};