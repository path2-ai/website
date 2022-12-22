import { getArticleBySlug } from '@/services/blog';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function Article() {

    const router = useRouter();

    const [article, setArticle] = useState({});

    useEffect(() => {
        const { slug } = router.query;
        if (slug) {
            getArticleBySlug(slug).then((article) => {
                setArticle(article);
            });
        }
    }, [router.isReady]);


    return (
        <section className="mt-32 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            {article && (
                <div className='text-white'>
                    <div>
                        {article.title}
                    </div>
                    <div>
                        {article.content}

                    </div>
                </div>
            )}
        </section>
    )
}