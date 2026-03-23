const CafeFooter = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg text-foreground">Ember & Oak</p>
        <p className="font-sans text-xs text-cafe-warm-gray">
          © 2024 Ember & Oak Coffee · Portland, OR
        </p>
      </div>
    </footer>
  );
};

export default CafeFooter;
