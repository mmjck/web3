library;


pub struct Campaign {
    id: u64,
}


impl Campaign {
    pub fn new(id: u64) -> Self {
        Self { id }
    }
}