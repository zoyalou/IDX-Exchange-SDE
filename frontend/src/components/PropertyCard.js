function parsePhotos(photosField) {
  if (!photosField) return [];
  try {
    const parsed = JSON.parse(photosField);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function PropertyCard({ property }) {
  const photos = parsePhotos(property.L_Photos);
  const firstPhoto = photos.length > 0 ? photos[0] : null;

  const price = property.L_SystemPrice
    ? `$${property.L_SystemPrice.toLocaleString()}`
    : 'Price unavailable';

  const beds = property.L_Keyword2 != null ? property.L_Keyword2 : '—';
  const baths = property.LM_Dec_3 != null ? property.LM_Dec_3 : '—';
  const sqft = property.LM_Int2_3 != null ? property.LM_Int2_3.toLocaleString() : '—';

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.2s' }}
         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      {firstPhoto ? (
        <img src={firstPhoto} alt={property.L_Address} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      ) : (
        <div style={{ width: '100%', height: '200px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          No photo available
        </div>
      )}
      <div style={{ padding: '12px' }}>
        <h3>{price}</h3>
        <p>{property.L_Address}</p>
        <p>{property.L_City}, {property.L_State}</p>
        <p>{beds} bd | {baths} ba | {sqft} sqft</p>
      </div>
    </div>
  );
}

export default PropertyCard;