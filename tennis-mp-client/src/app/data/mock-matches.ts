import { Match } from '../models/match-model';

export const MOCK_MATCHES: Match[] = [
    {
        id: 1,
        tny_id: '001',
        tny_name: 'Australian Open',
        surface: 'Hard',
        draw_size: 128,
        tny_date: new Date('2023-01-15'),
        match_num: '1',
        score: '6-3, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'January',
        winner: true,
        p0_name: 'Novak Djokovic',
        p1_name: 'Rafael Nadal',
        p0_elo_538: 2000,
        p1_elo_538: 1900,
        p0_sf_elo_538: 1950,
        p1_sf_elo_538: 1850
    },
    {
        id: 2,
        tny_id: '002',
        tny_name: 'French Open',
        surface: 'Clay',
        draw_size: 128,
        tny_date: new Date('2023-05-28'),
        match_num: '2',
        score: '7-5, 6-3',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'May',
        winner: true,
        p0_name: 'Roger Federer',
        p1_name: 'Andy Murray',
        p0_elo_538: 2100,
        p1_elo_538: 2000,
        p0_sf_elo_538: 2050,
        p1_sf_elo_538: 1950
    },
    {
        id: 3,
        tny_id: '003',
        tny_name: 'Wimbledon',
        surface: 'Grass',
        draw_size: 128,
        tny_date: new Date('2023-07-03'),
        match_num: '3',
        score: '6-4, 7-6',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'July',
        winner: true,
        p0_name: 'Serena Williams',
        p1_name: 'Simona Halep',
        p0_elo_538: 2200,
        p1_elo_538: 2100,
        p0_sf_elo_538: 2150,
        p1_sf_elo_538: 2050
    },
    {
        id: 4,
        tny_id: '004',
        tny_name: 'US Open',
        surface: 'Hard',
        draw_size: 128,
        tny_date: new Date('2023-08-28'),
        match_num: '4',
        score: '6-2, 6-3',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'August',
        winner: true,
        p0_name: 'Naomi Osaka',
        p1_name: 'Ashleigh Barty',
        p0_elo_538: 2300,
        p1_elo_538: 2200,
        p0_sf_elo_538: 2250,
        p1_sf_elo_538: 2150
    },
    {
        id: 5,
        tny_id: '005',
        tny_name: 'Indian Wells',
        surface: 'Hard',
        draw_size: 96,
        tny_date: new Date('2023-03-08'),
        match_num: '5',
        score: '6-3, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'March',
        winner: true,
        p0_name: 'Daniil Medvedev',
        p1_name: 'Stefanos Tsitsipas',
        p0_elo_538: 2400,
        p1_elo_538: 2300,
        p0_sf_elo_538: 2350,
        p1_sf_elo_538: 2250
    },
    {
        id: 6,
        tny_id: '006',
        tny_name: 'Miami Open',
        surface: 'Hard',
        draw_size: 96,
        tny_date: new Date('2023-03-22'),
        match_num: '6',
        score: '7-6, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'March',
        winner: true,
        p0_name: 'Alexander Zverev',
        p1_name: 'Dominic Thiem',
        p0_elo_538: 2500,
        p1_elo_538: 2400,
        p0_sf_elo_538: 2450,
        p1_sf_elo_538: 2350
    },
    {
        id: 7,
        tny_id: '007',
        tny_name: 'Monte Carlo Masters',
        surface: 'Clay',
        draw_size: 56,
        tny_date: new Date('2023-04-10'),
        match_num: '7',
        score: '6-4, 6-3',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'April',
        winner: true,
        p0_name: 'Stan Wawrinka',
        p1_name: 'David Goffin',
        p0_elo_538: 2600,
        p1_elo_538: 2500,
        p0_sf_elo_538: 2550,
        p1_sf_elo_538: 2450
    },
    {
        id: 8,
        tny_id: '008',
        tny_name: 'Madrid Open',
        surface: 'Clay',
        draw_size: 64,
        tny_date: new Date('2023-05-01'),
        match_num: '8',
        score: '6-3, 6-2',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'May',
        winner: true,
        p0_name: 'Petra Kvitova',
        p1_name: 'Garbine Muguruza',
        p0_elo_538: 2700,
        p1_elo_538: 2600,
        p0_sf_elo_538: 2650,
        p1_sf_elo_538: 2550
    },
    {
        id: 9,
        tny_id: '009',
        tny_name: 'Rome Masters',
        surface: 'Clay',
        draw_size: 56,
        tny_date: new Date('2023-05-08'),
        match_num: '9',
        score: '7-5, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'May',
        winner: true,
        p0_name: 'Victoria Azarenka',
        p1_name: 'Angelique Kerber',
        p0_elo_538: 2800,
        p1_elo_538: 2700,
        p0_sf_elo_538: 2750,
        p1_sf_elo_538: 2650
    },
    {
        id: 10,
        tny_id: '010',
        tny_name: 'Canadian Open',
        surface: 'Hard',
        draw_size: 56,
        tny_date: new Date('2023-08-07'),
        match_num: '10',
        score: '6-4, 6-3',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'August',
        winner: true,
        p0_name: 'Kei Nishikori',
        p1_name: 'Milos Raonic',
        p0_elo_538: 2900,
        p1_elo_538: 2800,
        p0_sf_elo_538: 2850,
        p1_sf_elo_538: 2750
    },
    {
        id: 11,
        tny_id: '011',
        tny_name: 'Cincinnati Masters',
        surface: 'Hard',
        draw_size: 56,
        tny_date: new Date('2023-08-14'),
        match_num: '11',
        score: '6-3, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'August',
        winner: true,
        p0_name: 'Nick Kyrgios',
        p1_name: 'John Isner',
        p0_elo_538: 3000,
        p1_elo_538: 2900,
        p0_sf_elo_538: 2950,
        p1_sf_elo_538: 2850
    },
    {
        id: 12,
        tny_id: '012',
        tny_name: 'Shanghai Masters',
        surface: 'Hard',
        draw_size: 56,
        tny_date: new Date('2023-10-09'),
        match_num: '12',
        score: '7-6, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'October',
        winner: true,
        p0_name: 'Karen Khachanov',
        p1_name: 'Roberto Bautista Agut',
        p0_elo_538: 3100,
        p1_elo_538: 3000,
        p0_sf_elo_538: 3050,
        p1_sf_elo_538: 2950
    },
    {
        id: 13,
        tny_id: '013',
        tny_name: 'Paris Masters',
        surface: 'Hard',
        draw_size: 56,
        tny_date: new Date('2023-10-30'),
        match_num: '13',
        score: '6-4, 6-3',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'October',
        winner: true,
        p0_name: 'Gael Monfils',
        p1_name: 'Jo-Wilfried Tsonga',
        p0_elo_538: 3200,
        p1_elo_538: 3100,
        p0_sf_elo_538: 3150,
        p1_sf_elo_538: 3050
    },
    {
        id: 14,
        tny_id: '014',
        tny_name: 'ATP Finals',
        surface: 'Hard',
        draw_size: 8,
        tny_date: new Date('2023-11-12'),
        match_num: '14',
        score: '7-5, 6-3',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'November',
        winner: true,
        p0_name: 'Matteo Berrettini',
        p1_name: 'Diego Schwartzman',
        p0_elo_538: 3300,
        p1_elo_538: 3200,
        p0_sf_elo_538: 3250,
        p1_sf_elo_538: 3150
    },
    {
        id: 15,
        tny_id: '015',
        tny_name: 'Doha Open',
        surface: 'Hard',
        draw_size: 32,
        tny_date: new Date('2023-01-02'),
        match_num: '15',
        score: '6-3, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'January',
        winner: true,
        p0_name: 'Andrey Rublev',
        p1_name: 'Denis Shapovalov',
        p0_elo_538: 3400,
        p1_elo_538: 3300,
        p0_sf_elo_538: 3350,
        p1_sf_elo_538: 3250
    },
    {
        id: 16,
        tny_id: '016',
        tny_name: 'Dubai Tennis Championships',
        surface: 'Hard',
        draw_size: 32,
        tny_date: new Date('2023-02-27'),
        match_num: '16',
        score: '7-6, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'February',
        winner: true,
        p0_name: 'Jannik Sinner',
        p1_name: 'Felix Auger-Aliassime',
        p0_elo_538: 3500,
        p1_elo_538: 3400,
        p0_sf_elo_538: 3450,
        p1_sf_elo_538: 3350
    },
    {
        id: 17,
        tny_id: '017',
        tny_name: 'Stuttgart Open',
        surface: 'Grass',
        draw_size: 32,
        tny_date: new Date('2023-06-12'),
        match_num: '17',
        score: '6-4, 6-3',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'June',
        winner: true,
        p0_name: 'Marin Cilic',
        p1_name: 'Grigor Dimitrov',
        p0_elo_538: 3600,
        p1_elo_538: 3500,
        p0_sf_elo_538: 3550,
        p1_sf_elo_538: 3450
    },
    {
        id: 18,
        tny_id: '018',
        tny_name: 'Queen\'s Club Championships',
        surface: 'Grass',
        draw_size: 32,
        tny_date: new Date('2023-06-19'),
        match_num: '18',
        score: '7-5, 6-3',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'June',
        winner: true,
        p0_name: 'Kevin Anderson',
        p1_name: 'Lucas Pouille',
        p0_elo_538: 3700,
        p1_elo_538: 3600,
        p0_sf_elo_538: 3650,
        p1_sf_elo_538: 3550
    },
    {
        id: 19,
        tny_id: '019',
        tny_name: 'Eastbourne International',
        surface: 'Grass',
        draw_size: 32,
        tny_date: new Date('2023-06-26'),
        match_num: '19',
        score: '6-3, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'June',
        winner: true,
        p0_name: 'Sam Querrey',
        p1_name: 'Adrian Mannarino',
        p0_elo_538: 3800,
        p1_elo_538: 3700,
        p0_sf_elo_538: 3750,
        p1_sf_elo_538: 3650
    },
    {
        id: 20,
        tny_id: '020',
        tny_name: 'Washington Open',
        surface: 'Hard',
        draw_size: 48,
        tny_date: new Date('2023-07-31'),
        match_num: '20',
        score: '7-6, 6-4',
        best_of: 3,
        is_gs: true,
        match_year: 2023,
        match_month: 'July',
        winner: true,
        p0_name: 'Taylor Fritz',
        p1_name: 'Reilly Opelka',
        p0_elo_538: 3900,
        p1_elo_538: 3800,
        p0_sf_elo_538: 3850,
        p1_sf_elo_538: 3750
    }
];