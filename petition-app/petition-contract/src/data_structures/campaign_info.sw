library;

use ::data_structures::campaign_state::CampaignState;

pub struct CampaignInfo {
    author: Identity,
    state: CampaignState,
    deadline: u64,
    total_signs: u64,
}


impl CampaignInfo {
    pub fn new(
        author: Identity,
        deadline: u64
    ) -> Self {
        Self{
            author,
            deadline,
            total_signs: 0,
            state: CampaignState::Progress

        }
    }
}