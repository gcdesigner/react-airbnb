import React from 'react';

function GuestAccess() {
  return (
    <section>
      <strong>Acesso dos hóspedes</strong>
      <p>
        While you're staying here, the house will be your private oasis. Feel
        free to explore the yard (we are on 1.25 acres). Also make sure to enjoy
        the Jacuzzi and incredible views from the front porch during your stay!
      </p>
    </section>
  );
}

export default React.memo(GuestAccess);
