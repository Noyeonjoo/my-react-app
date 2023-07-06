type ItemRowProps = {
    children: React.ReactNode;
};

function ItemRow({ children }: ItemRowProps) {
    return (
        <div className="w-full flex items-center justify-between space-x-1.5">
            {children}
        </div>
    );
}

export default ItemRow;
