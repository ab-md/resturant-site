import Card from '../modules/Card';

const Menu = ({ foods }) => {

    return (
        <main className="mt-24">
            <p className="text-3xl font-bold border-b-5 border-green-600 inline-block">
                Menu
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-24 mt-16">
                {
                    foods.map(food => (
                        <Card key={food.id} data={food} />
                    ))
                }
            </div>
        </main>
    );
};

export default Menu;