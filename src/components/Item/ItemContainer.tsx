type ItemContainerProps = {
    children: React.ReactNode;
    error?: string;
};

function ItemContainer({ children, error }: ItemContainerProps) {
    return (
        <div className="w-full space-y-1.5">
            {children}
            <div className="text-xs text-red absolute" style={{ marginTop: 3 }}>
                {error ? `• ${error}` : null}
            </div>
        </div>
    );
}

export default ItemContainer;
