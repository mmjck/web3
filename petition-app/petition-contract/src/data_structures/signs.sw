library;
pub struct Signs {
    sign: u8,
    campaign_id: u64
}

impl Signs {
    pub fn new(campaign_id: u64) -> Self {
        Self {
            sign: 1,
            campaign_id
        }
    }
}