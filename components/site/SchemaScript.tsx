type SchemaScriptProps = {
  schemas: Array<Record<string, unknown>>;
};

export function SchemaScript({ schemas }: SchemaScriptProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
