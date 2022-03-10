import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Hidden} from "@mui/material";
import {TabPicker} from "../components/TabPicker";
import {PackageCard} from "../components/PackageCard";
import {PackageCardItem} from "../components/PackageCardItem";

export const Packages = () => {

    const [tab, setTab] = useState(1)

    return (
        <section className="packages">
            <TabPicker onClick={setTab}/>
            <Container>
            { tab === 1 ? (
                <div className="packages__tab">
                    <div className="packages__tab__cards-row">
                    <PackageCard type="gold" text="75 Guest Rooms (Run of House)">
                        <PackageCardItem persons={1} price="$8,000"/>
                        <PackageCardItem persons={2} price="$14,400"/>
                    </PackageCard>
                    <PackageCard type="platinum" text="40 Junior Suite">
                        <PackageCardItem persons={1} price="$9,600"/>
                        <PackageCardItem persons={2} price="$16,000"/>
                    </PackageCard>
                    </div>
                </div>
            ) : (
                <div className="packages__tab">
                    <div className="packages__tab__cards-row">
                        <PackageCard type="gold" text="75 Guest Rooms (Run of House)">
                            <PackageCardItem persons={1} price="$8,000" discount="-20%" originalPrice="$10,000"/>
                            <PackageCardItem persons={2} price="$14,400" discount="-20%" originalPrice="$18,000"/>
                        </PackageCard>
                        <PackageCard type="platinum" text="40 Junior Suite">
                            <PackageCardItem persons={1} price="$9,600" discount="-20%" originalPrice="$12,000"/>
                            <PackageCardItem persons={2} price="$16,000" discount="-20%" originalPrice="$20,000"/>
                        </PackageCard>
                        <PackageCard type="platinum" text="One bedroom suite in limited supply">
                            <PackageCardItem persons={1} price="$9,600" discount="-20%" originalPrice="$12,000"/>
                            <PackageCardItem persons={2} price="$16,000" discount="-20%" originalPrice="$20,000"/>
                        </PackageCard>
                        <PackageCard type="vip" text="10 Two Bedroom Suite in limited supply">
                            <PackageCardItem persons={1} price="$12,000" discount="-20%" originalPrice="$15,000"/>
                            <PackageCardItem persons={2} price="$20,000" discount="-20%" originalPrice="$25,000"/>
                            <PackageCardItem persons={3} price="$25,600" discount="-20%" originalPrice="$32,000"/>
                            <PackageCardItem persons={4} price="$32,000" discount="-20%" originalPrice="$40,000"/>
                        </PackageCard>
                    </div>

                </div>
            )}
            </Container>
        </section>
    )
}
