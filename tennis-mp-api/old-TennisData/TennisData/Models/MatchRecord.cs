﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable enable
using System;
using System.Collections.Generic;

namespace TennisData.Models;

public partial class MatchRecord
{
    public int id { get; set; }

    public string? tny_id { get; set; }

    public string? tny_name { get; set; }

    public string? surface { get; set; }

    public int? draw_size { get; set; }

    public DateTime? tny_date { get; set; }

    public string? match_num { get; set; }

    public string? score { get; set; }

    public int? best_of { get; set; }

    public bool? is_gs { get; set; }

    public int? match_year { get; set; }

    public string? match_month { get; set; }

    public double? avg_52_s { get; set; }

    public double? avg_52_r { get; set; }

    public double? sf_avg_52_s { get; set; }

    public double? sf_avg_52_r { get; set; }

    public double? tny_stats { get; set; }

    public string? w_commop_match_prob { get; set; }

    public bool? winner { get; set; }

    public string? p0_name { get; set; }

    public string? p1_name { get; set; }

    public double? p0_elo_538 { get; set; }

    public double? p1_elo_538 { get; set; }

    public double? p0_sf_elo_538 { get; set; }

    public double? p1_sf_elo_538 { get; set; }

    public int? p0_swon { get; set; }

    public int? p1_swon { get; set; }

    public int? p0_svpt { get; set; }

    public int? p1_svpt { get; set; }

    public int? p0_rwon { get; set; }

    public int? p1_rwon { get; set; }

    public int? p0_rpt { get; set; }

    public int? p1_rpt { get; set; }

    public string? p0_52_swon { get; set; }

    public string? p1_52_swon { get; set; }

    public string? p0_52_svpt { get; set; }

    public string? p1_52_svpt { get; set; }

    public string? p0_52_rwon { get; set; }

    public string? p1_52_rwon { get; set; }

    public string? p0_52_rpt { get; set; }

    public string? p1_52_rpt { get; set; }

    public string? p0_sf_52_swon { get; set; }

    public string? p1_sf_52_swon { get; set; }

    public string? p0_sf_52_svpt { get; set; }

    public string? p1_sf_52_svpt { get; set; }

    public string? p0_sf_52_rwon { get; set; }

    public string? p1_sf_52_rwon { get; set; }

    public string? p0_sf_52_rpt { get; set; }

    public string? p1_sf_52_rpt { get; set; }

    public string? p0_52_s_adj { get; set; }

    public string? p1_52_s_adj { get; set; }

    public string? p0_52_r_adj { get; set; }

    public string? p1_52_r_adj { get; set; }

    public double? p0_s_pct { get; set; }

    public double? p0_r_pct { get; set; }

    public double? p0_sf_s_pct { get; set; }

    public double? p0_sf_r_pct { get; set; }

    public double? p1_s_pct { get; set; }

    public double? p1_r_pct { get; set; }

    public double? p1_sf_s_pct { get; set; }

    public double? p1_sf_r_pct { get; set; }

    public string? p0_commop_s_pct { get; set; }

    public string? p1_commop_s_pct { get; set; }

    public string? p0_commop_r_pct { get; set; }

    public string? p1_commop_r_pct { get; set; }

    public string? elo_diff { get; set; }

    public string? sf_elo_diff { get; set; }

    public string? p0_s_pct_obsv { get; set; }

    public string? p1_s_pct_obsv { get; set; }

    public double? p0_s_pct_EM { get; set; }

    public double? p1_s_pct_EM { get; set; }

    public double? p0_r_pct_EM { get; set; }

    public double? p1_r_pct_EM { get; set; }

    public double? p0_sf_s_pct_EM { get; set; }

    public double? p1_sf_s_pct_EM { get; set; }

    public double? p0_sf_r_pct_EM { get; set; }

    public double? p1_sf_r_pct_EM { get; set; }

    public string? p0_52_s_adj_EM { get; set; }

    public string? p1_52_s_adj_EM { get; set; }

    public string? p0_52_r_adj_EM { get; set; }

    public string? p1_52_r_adj_EM { get; set; }

    public string? match_id { get; set; }

    public double? p0_s_kls { get; set; }

    public double? p1_s_kls { get; set; }

    public double? p0_s_kls_EM { get; set; }

    public double? p1_s_kls_EM { get; set; }

    public double? p0_s_sf_kls { get; set; }

    public double? p1_s_sf_kls { get; set; }

    public double? p0_s_sf_kls_EM { get; set; }

    public double? p1_s_sf_kls_EM { get; set; }

    public double? p0_s_adj_kls { get; set; }

    public double? p1_s_adj_kls { get; set; }

    public double? p0_s_adj_kls_EM { get; set; }

    public double? p1_s_adj_kls_EM { get; set; }

    public double? p0_s_commop_kls { get; set; }

    public double? p1_s_commop_kls { get; set; }

    public double? p0_s_baseline { get; set; }

    public double? p1_s_baseline { get; set; }

    public double? match_prob_kls { get; set; }

    public double? match_prob_kls_EM { get; set; }

    public double? match_prob_sf_kls { get; set; }

    public double? match_prob_sf_kls_EM { get; set; }

    public double? match_prob_adj_kls { get; set; }

    public double? match_prob_adj_kls_EM { get; set; }

    public double? match_prob_commop_kls { get; set; }

    public string? match_prob_commop { get; set; }

    public double? elo_prob { get; set; }

    public double? sf_elo_prob { get; set; }

    public double? p0_s_kls_elo { get; set; }

    public double? p1_s_kls_elo { get; set; }
}