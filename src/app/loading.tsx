export default function Loading() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-background">
            <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 border-muted border-t-primary animate-spin" />
                <p className="text-sm text-muted-foreground font-medium">লোড হচ্ছে...</p>
            </div>
        </div>
    );
}
