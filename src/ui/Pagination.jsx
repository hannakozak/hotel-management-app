import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../utils/constants';

export const Pagination = ({ count }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentPage = !searchParams.get('page')
		? 1
		: Number(searchParams.get('page'));

	const pageCount = Math.ceil(count / PAGE_SIZE);

	function nextPage() {
		const next = currentPage === pageCount ? currentPage : currentPage + 1;
		searchParams.set('page', next);
		setSearchParams(searchParams);
	}

	function prevPage() {
		const prev = currentPage === 1 ? currentPage : currentPage - 1;
		searchParams.set('page', prev);
		setSearchParams(searchParams);
	}

	if (pageCount <= 1) return null;

	return (
		<div className="w-full flex items-center justify-between">
			<p className="text-small ml-2">
				Showing{' '}
				<span className="font-semibold">
					{(currentPage - 1) * PAGE_SIZE + 1}
				</span>{' '}
				to{' '}
				<span className="font-semibold">
					{currentPage === pageCount ? count : currentPage * PAGE_SIZE}
				</span>{' '}
				of <span className="font-semibold">{count}</span> results
			</p>

			<div className="flex gap-2">
				<button
					onClick={prevPage}
					disabled={currentPage === 1}
					className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-sm font-medium text-small transition-all
            ${
							currentPage === 1
								? 'bg-gray-100 text-gray-400 cursor-not-allowed'
								: 'bg-gray-50 hover:bg-brand-600 hover:text-brand-50'
						}`}
				>
					<HiChevronLeft className="h-[1.8rem] w-[1.8rem]" />
					<span>Previous</span>
				</button>

				<button
					onClick={nextPage}
					disabled={currentPage === pageCount}
					className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-sm font-medium text-small transition-all
            ${
							currentPage === pageCount
								? 'bg-gray-100 text-gray-400 cursor-not-allowed'
								: 'bg-gray-50 hover:bg-brand-600 hover:text-brand-50'
						}`}
				>
					<span>Next</span>
					<HiChevronRight className="h-[1.8rem] w-[1.8rem]" />
				</button>
			</div>
		</div>
	);
};
