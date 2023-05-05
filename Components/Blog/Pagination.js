import React from 'react';
import * as qs from 'qs'
import { useRouter } from 'next/router';

const Pagination = ({ page, pageCount, redirectUrl = '/blogs' }) => {
    const router = useRouter();

    const isNextDisabled = () => {
        return page >= pageCount;
    };

    const isPrevDisabled = () => {
        return page <= 1;
    };

    const handlePaginate = async (direction) => {
        if (direction === 1 && isNextDisabled()) {
            return;
        }

        if (direction === -1 && isPrevDisabled()) {
            return;
        }
        const queryString = qs.stringify({
            ...router.query,
            page: page + direction,
        });

        router.push(`?${queryString}`);
    };
    return (
        <div className="flex justify-center mt-24">
            <button
                onClick={() => handlePaginate(-1)}
                className={`${'bg-green- py-2 px-4 w-24 rounded'} ${
                    isPrevDisabled() ? 'disabled' : 'bg-green-500'
                }`}>
                Previous
            </button>
            <button
                onClick={() => handlePaginate(1)}
                className={`${'bg-primary py-2 px-4 w-24 rounded ml-4'} ${
                    isNextDisabled() ? 'disabled' : 'bg-green-400'
                }`}>
                Next
            </button>
        </div>
    );
};

export default Pagination;