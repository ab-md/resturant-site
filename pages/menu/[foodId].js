import FoodPage from '@/components/templates/FoodPage';
import { useRouter } from 'next/router';

const Food = ({ data }) => {

    const router = useRouter();

    if (router.isFallback) {
        return (
            <div>Loading ...</div>
        )
    }

    return (
        <div>
            <FoodPage data={data} />
        </div>
    );
};

export default Food;

export async function getStaticPaths() {
    const res = await fetch(`${process.env.BASE_URL}`);
    const data = await res.json();
    const foods = data.slice(0, 4);
    const paths = foods.map(food => ({ params: { foodId: food.id.toString() } }));
    return {
        // paths: paths
        paths,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { params: { foodId } } = context;
    const res = await fetch(`${process.env.BASE_URL}/${foodId}`);
    const data = await res.json();

    if (!data.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
        revalidate: 60 * 60 * 5,
    }
}