import React from 'react';

function Observations() {
  return (
    <section>
      <h3>Outras observações</h3>
      <p>
        Our driveway wraps around the back of house, so feel free to circle
        around the driveway rather than backing out.{' '}
      </p>

      <p>
        This house has old plumbing and has a septic system. PLEASE do not flush
        anything other than toilet paper.
      </p>

      <p>
        The second bedroom is detached, and is about a 10ft walk outside from
        the main house.
      </p>

      <p>
        Transient Occupancy Tax - A 7% TOT tax required by San Bernardino County
        is included in the nightly rate. For our area, Airbnb does not yet break
        this down as an extra line item, but rather is included in the base
        price.
      </p>
    </section>
  );
}

export default React.memo(Observations);
