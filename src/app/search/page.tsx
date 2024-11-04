'use client';

import { Suspense } from 'react';
import SearchMovieResult from '@/components/search-result/SearchMovieResult';

const SearchPage: React.FC = () => {
   
    return (
        <Suspense fallback={<div>... loading</div>}>
            <SearchMovieResult />
        </Suspense>
    );
};


export default SearchPage;
