/* eslint-disable no-console */
import { createClient } from '@supabase/supabase-js';
import { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } from './config';

const supabase = createClient(VITE_SUPABASE_URL as string, VITE_SUPABASE_KEY as string);

export default supabase;
